export interface Task {
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'done';
  assigned_to?: number | null;
  created_at?: string;
  updated_at?: string;
}

export interface TaskUpdate {
  title?: string;
  description?: string;
  status?: 'pending' | 'in_progress' | 'done';
  assigned_to?: number | null;
}
