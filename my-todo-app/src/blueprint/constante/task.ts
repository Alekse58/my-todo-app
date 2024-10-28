import { ETaskStatus } from '@/blueprint/types/TaskTypes.ts';

export const STATUS_TASK_TEXT = {
  [ETaskStatus.PENDING]: 'Ожидание',
  [ETaskStatus.IN_PROGRESS]: 'В работе',
  [ETaskStatus.DONE]: 'Готово',
};

export const STATUS_TASK_TEXT_LIST = [
  'Ожидание',
  'В работе',
  'Готово',
];
