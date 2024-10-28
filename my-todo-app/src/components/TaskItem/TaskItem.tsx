import React from 'react';

import { ITask } from '@/blueprint/types/TaskTypes.ts';

interface ITaskItemProps {
  data: ITask;
}

const TaskItem = ({ data: {
  title,
  status,
} }: ITaskItemProps) => (
  <div className='bg-gray-100 p-4 rounded-xl border border-black/5'>
    <div className='flex flex-col gap-2'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-sm text-gray-600'>Статус: {status}</p>
    </div>
  </div>
);

export default TaskItem;
