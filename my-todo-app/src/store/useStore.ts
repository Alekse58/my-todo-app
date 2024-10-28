import { create } from 'zustand';

interface UserState {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}


export const useStore = create<UserState>((set) => ({
  token: localStorage.getItem('token'),
  setToken: (token) => {
    set({ token });
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  },
  clearToken: () => {
    set({ token: null });
    localStorage.removeItem('token');
  },
}));
