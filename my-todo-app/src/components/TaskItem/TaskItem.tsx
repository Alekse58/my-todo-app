import React from 'react';

interface ITaskItemProps {
  title: string;
  status?: string;
}

const TaskItem = ({ title, status }: ITaskItemProps) => (
  <div className='task-item bg-gray-200 p-4 rounded-lg mb-4'>
    <h3 className='text-lg font-bold'>{title}</h3>
    <p className='text-sm text-gray-600'>Статус: {status}</p>
  </div>
);

export default TaskItem;
