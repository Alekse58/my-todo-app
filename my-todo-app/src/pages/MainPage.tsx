import React, {useState} from 'react';
// import TaskItem from '../components/TaskItem/TaskItem'; // Не забудьте импортировать TaskItem
// import { useAuthStore } from '@/store/authStore';
import TaskModal from '../components/TaskItem/TaskModal';

const MainPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container mx-auto px-4 py-6 bg-gray-100">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Управление задачами</h1>
            </header>

            <section className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Поиск по названию задачи"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </section>

            <section className="flex gap-4 mb-6">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md">Все</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">Ожидание</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">В работе</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">Готово</button>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                    Создать задачу
                </button>
                 <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            </section>

            <section className="task-list bg-white shadow-md rounded-md p-4">
                {/* Здесь будет компонент списка задач */}
                <p>Список задач появится здесь.</p>
            </section>
        </div>
    );
};

export default MainPage;
