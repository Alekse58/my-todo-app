import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { createTask } from '@/api/tasksApi';
import { Task } from '@/types/TaskTypes';

const statusOptions = {
    'pending': 'Ожидание',
    'in_progress': 'В работе',
    'done': 'Готово'
};

const CreateTaskModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<'pending' | 'in_progress' | 'done'>('pending');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const token = localStorage.getItem('token');

        try {
            const newTask: Task = { title, status };
            await createTask(newTask, token);
            onClose();
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ошибка создания задачи. Попробуйте еще раз.');
            }
        }
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md p-4 w-96">
                <Dialog.Title className="font-bold text-gray-700">Создать задачу</Dialog.Title>
                <Dialog.Description className="mt-2 text-gray-700">
                    Заполните информацию о задаче.
                </Dialog.Description>

                <form onSubmit={handleSubmit} className="mt-4">
                    <div>
                        <label className="block text-sm">Название задачи</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border rounded-md p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm">Статус</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value as 'pending' | 'in_progress' | 'done')}
                            className="border rounded-md p-2 w-full"
                        >
                            {Object.entries(statusOptions).map(([value, label]) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mt-6">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            Создать задачу
                        </button>
                        <button type="button" onClick={onClose} className="ml-2 px-4 py-2 bg-gray-300 rounded-md">
                            Отмена
                        </button>
                    </div>
                </form>

                <Dialog.Close asChild>
                    <button className="mt-2 text-gray-700">Закрыть</button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default CreateTaskModal;
