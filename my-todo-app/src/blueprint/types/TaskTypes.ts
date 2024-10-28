export enum ETaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export interface ITask {
  title: string;
  description?: string;
  status: ETaskStatus;
  assigned_to?: number | null;
  created_at?: string;
  updated_at?: string;
}

export interface ITaskUpdate {
  title?: string;
  description?: string;
  status?: ETaskStatus;
  assigned_to?: number | null;
}
