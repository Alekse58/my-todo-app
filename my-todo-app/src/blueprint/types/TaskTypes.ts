import { Dayjs } from 'dayjs';

export enum ETaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  status: ETaskStatus;
  assigned_to?: number | null;
  created_at?: Dayjs;
  updated_at?: Dayjs;
}

export interface ITaskResponse {
  items: ITask[];
  itemsCount: number;
  page: number;
  pageLimit: number;
  pages: number;
}

export interface ITaskUpdate {
  id: string;
  title?: string;
  description?: string;
  status?: ETaskStatus;
  assigned_to?: number | null;
}
