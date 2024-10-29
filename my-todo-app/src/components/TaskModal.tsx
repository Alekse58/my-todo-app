import React, { ChangeEvent, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { createTask } from '@/blueprint/api/tasksApi.ts';

import { STATUS_TASK_TEXT } from '@/blueprint/constante/task.ts';

import { ETaskStatus, ITask } from '@/blueprint/types/TaskTypes.ts';
import InputComponent from '@/components/Input';
import dayjs from 'dayjs';

interface ITaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTaskModal = ({ isOpen, onClose }:ITaskModalProps) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(ETaskStatus.PENDING);

  const handleWriteStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target?.value || '';

    setStatus(value as ETaskStatus);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');

    try {
      const newTask: ITask = {
        id: '',
        title,
        description: '',
        status,
        assignedTo: null,
        created_at: dayjs(),
        updated_at: dayjs(),
      };
      await createTask(newTask);

      window.location.reload();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ошибка создания задачи. Попробуйте еще раз.');
      }
    }
  };

  return (
    <Dialog.Root open={ isOpen } onOpenChange={ onClose }>
      <Dialog.Overlay className='fixed inset-0 bg-black opacity-50' />
      <Dialog.Content className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-md p-4 w-96'>
        <Dialog.Title className='font-bold text-gray-700'>
          Создать задачу
        </Dialog.Title>
        <Dialog.Description className='mt-2 text-gray-700'>
          Заполните информацию о задаче.
        </Dialog.Description>
        <form onSubmit={ handleSubmit } className='mt-4'>
          <InputComponent label='Название задачи' value={ title } onChange={ setTitle } />
          <div className='mt-4'>
            <label className='block text-sm'>Статус</label>
            <select
              value={ status }
              onChange={ handleWriteStatus }
              className='border rounded-xl p-2 w-full'
            >
              {Object.entries(STATUS_TASK_TEXT).map(([value, label]) => (
                <option key={ value } value={ value }>
                  {label}
                </option>
              ))}
            </select>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <div className='mt-6'>
            <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-xl'>
              Создать задачу
            </button>
            <button type='button' onClick={ onClose } className='ml-2 px-4 py-2 bg-gray-300 rounded-xl'>
              Отмена
            </button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CreateTaskModal;
