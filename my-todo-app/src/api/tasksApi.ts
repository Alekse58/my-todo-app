import apiClient from './api';
import { Task, TaskUpdate } from '../types/TaskTypes.ts';

export const getTasks = async (): Promise<Task[]> => {
  const response = await apiClient.get<Task[]>('/tasks/');
  return response.data;
};

export const createTask = async (taskData: TaskUpdate): Promise<Task> => {
  const response = await apiClient.post<Task>('/tasks/', taskData);
  return response.data;
};

export const updateTask = async (taskId: number, taskData: TaskUpdate): Promise<Task> => {
  const response = await apiClient.patch<Task>(`/tasks/${taskId}/`, taskData);
  return response.data;
};

export const deleteTask = async (taskId: number): Promise<void> => {
  await apiClient.delete(`/tasks/${taskId}/`);
};
