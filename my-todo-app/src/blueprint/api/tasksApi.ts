import { ITask, ITaskResponse, ITaskUpdate } from '@/blueprint/types/TaskTypes.ts';
import apiClient from './api.ts';

export const getTasks = async (params: ITaskResponse) =>
  apiClient.get<ITaskResponse>('/tasks/get/', { params }).then(({ data }) => data);

export const getTaskAutoComplete = async (params: string) =>
  apiClient.get<ITaskResponse>(`/tasks/find/?title=${params}`).then(({ data }) => data);

export const createTask = async (taskData: ITaskUpdate) =>
  apiClient.post<ITask>('/tasks/create/', taskData).then(({ data }) => data);

export const updateTask = async (taskId: string, taskData: ITaskUpdate) =>
  apiClient.patch<ITask>(`/tasks/update/${taskId}/`, taskData).then(({ data }) => data);

export const deleteTask = async (taskId: string) =>
  apiClient.delete(`/tasks/${taskId}/`);
