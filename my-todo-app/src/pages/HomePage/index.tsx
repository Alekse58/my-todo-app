import React, { useState } from 'react';
import InputComponent from '@/components/Input';
import TaskModal from '@/components/TaskModal';
import TaskManagement from '@/components/TaskManagement/TaskManagement'; // Импортируем TaskManagement

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => setIsModalOpen(!isModalOpen);
  const handleQuery = (value: string) => setQuery(value);

  const renderButtonCreateTask = () => (
    <button
      onClick={ handleModal }
      className='mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl'
    >
      Создать задачу
    </button>
  );

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
          <InputComponent value={ query } onChange={ handleQuery } />
          <TaskManagement />
        </div>
      </div>
      <TaskModal isOpen={ isModalOpen } onClose={ handleModal } />
    </>
  );
};

export default HomePage;
