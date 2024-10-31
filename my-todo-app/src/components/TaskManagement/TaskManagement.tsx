import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getTasks } from '@/blueprint/api/tasksApi';
import { INIT_TASK_FILTER } from '@/blueprint/constante/tasks';
import { ETaskStatus, ITaskResponse } from '@/blueprint/types/TaskTypes';
import TaskList from '../TaskItem/TaskList';
import StatusBar from '../StatusBar';

const TaskManagement = () => {
  const [selectedStatuses, setSelectedStatuses] = useState<ETaskStatus[]>([ETaskStatus.PENDING, ETaskStatus.IN_PROGRESS, ETaskStatus.DONE]);
  const [filter, setFilter] = useState<ITaskResponse>(INIT_TASK_FILTER);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [page, setPage] = useState(1);
  const [tasks, setTasks] = useState(filter.items);
  const [hasMore, setHasMore] = useState(true);

  const fetchTasks = async (pageNumber = 1) => {
    try {
      const response = await getTasks({ statuses: selectedStatuses }, page);
      if (pageNumber === 1) {
        setTasks(response.items);
      } else {
        setTasks((prevTasks) => [...prevTasks, ...response.items]);
      }
      setFilter(response);
      setHasMore(pageNumber < response.pages);
    } catch (error) {
      console.error('Ошибка загрузки задач:', error);
    }
  };

  const handleStatusChange = (newStatuses: ETaskStatus[]) => {
    setSelectedStatuses(newStatuses);
    setPage(1); // Обнуляем страницу при смене фильтра
  };

  const lastTaskRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observerRef.current.observe(node);
  }, [hasMore]);

  useEffect(() => {
    fetchTasks(page);
  }, [page, selectedStatuses]);

  return (
    <div className='mb-10'>
      <StatusBar statuses={ selectedStatuses } onChange={ handleStatusChange } fetchTasks={ () => fetchTasks(1) } />
      <div className='flex flex-col gap-5'>
        <TaskList tasks={ tasks } lastTaskRef={ lastTaskRef } />
      </div>
    </div>
  );
};

export default TaskManagement;
