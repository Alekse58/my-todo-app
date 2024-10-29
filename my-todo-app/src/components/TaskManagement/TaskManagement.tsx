import React, { useState, useEffect } from 'react';

import { getTasks } from '@/blueprint/api/tasksApi.ts';

import { INIT_TASK_FILTER } from '@/blueprint/constante/tasks.ts';
import { ETaskStatus, ITaskResponse } from '@/blueprint/types/TaskTypes.ts';
import PaginationComponent from '@/components/Pagination';
import TaskList from '../TaskItem/TaskList';
import StatusBar from '../StatusBar';

const TaskManagement = () => {
  const [selectedStatuses, setSelectedStatuses] = useState<ETaskStatus[]>([]);
  const [filter, setFilter] = useState<ITaskResponse>(INIT_TASK_FILTER);

  const handlePageChange = (page: number) => setFilter({ ...filter, page });

  const handleStatusChange = (newStatuses: ETaskStatus[]) => {
    setSelectedStatuses(newStatuses);
  };

  const fetchTasks = async () => {
    const response = await getTasks(filter);

    setFilter(response);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter.page]);

  return (
    <div className='mb-10'>
      <StatusBar statuses={ selectedStatuses } onChange={ handleStatusChange } fetchTasks={ fetchTasks } />
      <div className='flex flex-col gap-5'>
        <TaskList tasks={ filter.items } />
        <PaginationComponent
          page={ filter.page }
          pages={ filter.pages }
          onPageChange={ handlePageChange }
        />
      </div>
    </div>
  );
};

export default TaskManagement;
