import React, { useState } from 'react';
import { ITask } from '@/blueprint/types/TaskTypes.ts';
import { STATUS_TASK_TEXT } from '@/blueprint/constante/task.ts';
import TaskEditModal from './TaskEditModal';

interface ITaskItemProps {
  data: ITask;
}

const TaskItem = ({ data }: ITaskItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='bg-gray-100 p-4 rounded-xl border border-black/5'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-bold'>
            {data.title}
          </h2>
          <p className='text-sm text-gray-600'>
            Статус: {STATUS_TASK_TEXT[data.status]}
          </p>
          <p className='text-sm text-gray-600'>
            Прикреплён к: {data.assigned_to ? data.assigned_to.username : 'Никто не привязан'}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className='flex justify-end mt-2 text-blue-500'
          >
            Редактировать
          </button>
        </div>
      </div>
      {isModalOpen && (
        <TaskEditModal
          task={data}
          onClose={() => setIsModalOpen(false)}
          isOpen
        />
      )}
    </>
  );
};

export default TaskItem;
