import React, { useState } from 'react';

import StatusBar from '@/pages/StatusBar';
import InputComponent from '@/components/Input';
import TaskModal from '@/components/TaskModal.tsx';

import { ETaskStatus } from '@/blueprint/types/TaskTypes.ts';

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

  return (
    <>
      <div className='bg-gray-50'>
        <div className='flex flex-col mx-auto max-w-screen-xl px-4'>
          <div className='flex justify-between items-center my-5'>
            <h1 className='text-3xl font-bold text-gray-800'>
              Управление задачами
            </h1>
            {renderButtonCreateTask()}
          </div>
          <InputComponent value={ query } onChange={ handelQuery } />
          <StatusBar statuses={ activeButton } onChange={ handleAddButtonActive } />
          <section className='task-list bg-white shadow-md rounded-md p-4'>
            {/* Здесь будет компонент списка задач */}
            <p>Список задач появится здесь.</p>
          </section>
        </div>
      </div>
      <TaskModal isOpen={ isModalOpen } onClose={ handleModal }/>
    </>
  );
};

export default HomePage;
