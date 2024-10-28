import apiClient from './api';
import { Task, TaskUpdate } from '../types/TaskTypes';

export const getTasks = async (token: string): Promise<Task[]> => {
  const response = await apiClient.get<Task[]>('/tasks/', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};

export const createTask = async (taskData: TaskUpdate, token: string): Promise<Task> => {
  const response = await apiClient.post<Task>('/tasks/create/', taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateTask = async (taskId: number, taskData: TaskUpdate, token: string): Promise<Task> => {
  const response = await apiClient.patch<Task>(`/tasks/${taskId}/`, taskData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};

export const deleteTask = async (taskId: number, token: string): Promise<void> => {
  await apiClient.delete(`/tasks/${taskId}/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};
