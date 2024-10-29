import { ITask, ITaskResponse, ITaskUpdate } from '@/blueprint/types/TaskTypes.ts';
import apiClient from './api.ts';

export const getTasks = async (params?: any) =>
  apiClient.get<ITaskResponse>('/tasks/get/', { params }).then((res) => res.data);

export const createTask = async (taskData: ITaskUpdate) =>
  apiClient.post<ITask>('/tasks/create/', taskData).then((res) => res.data);

export const updateTask = async (taskId: number, taskData: ITaskUpdate) =>
  apiClient.patch<ITask>(`/tasks/${taskId}/`, taskData).then((res) => res.data);

export const deleteTask = async (taskId: number) => {
  await apiClient.delete(`/tasks/${taskId}/`);
};
