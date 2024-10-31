import React, { useEffect, useState, useCallback } from 'react';

import { getTaskAutoComplete } from '@/blueprint/api/tasksApi';
import { ITask } from '@/blueprint/types/TaskTypes';
import InputComponent from '@/components/Input';
import TaskList from '../TaskItem/TaskList';

const TaskSearch = () => {
  const [query, setQuery] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleQueryChange = (value: string) => setQuery(value);

  const fetchTasks = useCallback(async () => {
    if (query) {
      const response = await getTaskAutoComplete(query);
      setTasks(response.items);
    } else {
      clearTasks();
    }
  }, [query]);

  const clearTasks = () => setTasks([]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      <InputComponent
        value={query}
        placeholder='Введите название задачи'
        onChange={handleQueryChange}
      />
      <TaskList tasks={tasks}  />
    </div>
  );
};

export default TaskSearch;
