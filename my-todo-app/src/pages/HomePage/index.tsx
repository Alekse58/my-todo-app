import React, { useState } from 'react';

import TaskModal from '@/components/TaskModal';
import { Button } from '@/components/ui/button.tsx';
import TaskSearch from '@/components/TaskSearch/TaskSearch.tsx';
import TaskManagement from '@/components/TaskManagement/TaskManagement';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className='bg-gray-50 h-screen'>
        <div className='flex flex-col mx-auto max-w-screen-xl px-4'>
          <div className='flex justify-between items-center my-5'>
            <h1 className='text-3xl font-bold text-gray-800'>
              Управление задачами
            </h1>
            <Button onClick={ handleModal }>Создать задачу</Button>
          </div>
          <TaskSearch />
          <TaskManagement />
        </div>
      </div>
      <TaskModal isOpen={ isModalOpen } onClose={ handleModal } />
    </>
  );
};

export default HomePage;
