import React, { ChangeEvent, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { getUsers } from '@/blueprint/api/userApi.ts';
import { deleteTask, updateTask } from '@/blueprint/api/tasksApi.ts';

import InputComponent from '@/components/Input';
import { Button } from '@/components/ui/button.tsx';

import { STATUS_TASK_TEXT } from '@/blueprint/constante/task.ts';

import { ETaskStatus, ITask } from '@/blueprint/types/TaskTypes.ts';
import { IUser } from '@/blueprint/types/UserTypes.ts';

interface ITaskEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: ITask;
}

const TaskEditModal = ({
  isOpen,
  onClose,
  task: {
    id,
    title,
    status,
  },
}: ITaskEditModalProps) => {
  const [userName, setUserName] = useState(title);
  const [taskStatus, setTaskStatus] = useState<ETaskStatus>(status);
  const [selectUser, setSelectUser] = useState<string | undefined>('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState('');

  const handleWriteStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ETaskStatus;

    setTaskStatus(value);
  };

  const handleUserChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectUser(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const updatedTask = { id, title: userName, status: taskStatus };

      await updateTask(id, updatedTask);

      window.location.reload();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ошибка обновления задачи. Попробуйте еще раз.');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);

      onClose();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ошибка удаления задачи. Попробуйте еще раз.');
    }
  };

  const fetchUsers = async () => {
    try {
      const usersList = await getUsers();

      setUsers(usersList);
    } catch (err) {
      console.error('Ошибка при получении пользователей:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Dialog.Root open={ isOpen } onOpenChange={ onClose }>
      <Dialog.Overlay className='fixed inset-0 bg-black opacity-50' />
      <Dialog.Content className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-md p-4 w-96'>
        <Dialog.Title className='font-bold text-gray-700'>Редактировать задачу</Dialog.Title>
        <Dialog.Description className='mt-2 text-gray-700'>
          Обновите информацию о задаче.
        </Dialog.Description>
        <form onSubmit={ handleSubmit } className='mt-4'>
          <InputComponent
            value={ userName }
            label='Название задачи'
            placeholder='Введите название задачи'
            onChange={ setUserName }
          />
          <div className='mt-4'>
            <label className='block text-sm'>Статус</label>
            <select
              value={ taskStatus }
              onChange={ handleWriteStatus }
              className='border rounded-xl p-2 w-full'
            >
              {Object.entries(STATUS_TASK_TEXT)?.map(([value, label]) => (
                <option key={ value } value={ value }>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className='mt-4'>
            <label className='block text-sm'>Исполнитель</label>
            <select
              value={ selectUser }
              onChange={ handleUserChange }
              className='border rounded-xl p-2 w-full'
            >
              <option value=''>Выберите исполнителя</option>
              {users.map(user => (
                <option key={ user.id } value={ user.id }>
                  {user.username} ({user.email})
                </option>
              ))}
            </select>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <div className='flex flex-col gap-4 mt-6'>
            <div className='flex gap-4'>
              <Button variant='default' type='submit'>Сохранить изменения</Button>
              <Button variant='cancel' onClick={ onClose }>Отмена</Button>
            </div>
            <Button type='button' variant='delete' onClick={ handleDelete }>Удалить задачу</Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default TaskEditModal;
