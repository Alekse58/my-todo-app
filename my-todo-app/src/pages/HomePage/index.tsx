import dayjs from 'dayjs';
import React, { useState } from 'react';

import StatusBar from '@/pages/StatusBar';
import InputComponent from '@/components/Input';
import TaskModal from '@/components/TaskModal.tsx';
import TaskItem from '@/components/TaskItem/TaskItem.tsx';

import { ETaskStatus, ITask } from '@/blueprint/types/TaskTypes.ts';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<ETaskStatus[]>([]);

  const handleAddButtonActive = (values: ETaskStatus[]) => {
    const updatedActiveButton = values.reduce((acc: ETaskStatus[], value: ETaskStatus) => {
      if (acc.includes(value)) {
        return acc.filter(item => item !== value);
      }

      return [...acc, value];
    }, [...activeButton]);

    setActiveButton(updatedActiveButton);
  };

  const handleModal = () => setIsModalOpen(!isModalOpen);

  const handelQuery = (value: string) => setQuery(value);

  const renderButtonCreateTask = () => (
    <button
      onClick={ handleModal }
      className='mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl'
    >
      <span>Создать задачу</span>
    </button>
  );

  const init_task: ITask = {
    id: 'fsdf',
    title: 'fdsfds',
    status: ETaskStatus.PENDING,
    assigned_to: null,
    description: 'fsdfdsf',
    created_at: dayjs(),
    updated_at: dayjs(),
  };

  const renderTasks = () => [init_task, init_task].map((task) => (
    <TaskItem key={ task.id } data={ task } />
  ));

  return (
    <>
      <div className='bg-gray-50 h-screen'>
        <div className='flex flex-col mx-auto max-w-screen-xl px-4'>
          <div className='flex justify-between items-center my-5'>
            <h1 className='text-3xl font-bold text-gray-800'>
              Управление задачами
            </h1>
            {renderButtonCreateTask()}
          </div>
          <InputComponent value={ query } onChange={ handelQuery } />
          <StatusBar statuses={ activeButton } onChange={ handleAddButtonActive } />
          <div className='grid grid-cols-2 gap-5 bg-white shadow rounded-xl p-4'>
            {renderTasks()}
          </div>
        </div>
      </div>
      <TaskModal isOpen={ isModalOpen } onClose={ handleModal }/>
    </>
  );
};

export default HomePage;
