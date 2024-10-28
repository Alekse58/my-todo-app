import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
});


apiClient.interceptors.request.use((config: CustomAxiosRequestConfig) => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});


apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    console.error(error.response?.status);
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refresh');
      if (refreshToken) {
        try {
          const response = await axios.post('http://localhost:8000/api/token/refresh/', {
            refresh: refreshToken,
          });

          const newAccessToken = response.data.access;
          localStorage.setItem('access', newAccessToken);
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          return apiClient(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          window.location.href = '/login';
        }
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;