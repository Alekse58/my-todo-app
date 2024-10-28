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

export interface ITaskUpdate {
  id: string;
  title?: string;
  description?: string;
  status?: ETaskStatus;
  assigned_to?: number | null;
}
