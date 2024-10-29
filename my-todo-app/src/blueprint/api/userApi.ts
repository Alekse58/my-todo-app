import { IUser } from '@/blueprint/types/UserTypes.ts';
import apiClient from './api.ts';

export const getUsers = async () =>
  apiClient.get<IUser[]>('/users/').then((res) => res.data);
