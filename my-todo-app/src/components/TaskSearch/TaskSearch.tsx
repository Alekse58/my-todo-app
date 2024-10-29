import React, { useEffect, useState, useCallback } from 'react';
import { getTasks } from '@/blueprint/api/tasksApi.ts';
import InputComponent from '@/components/Input';
import { ITask } from '@/blueprint/types/TaskTypes.ts';
import TaskList from '../TaskItem/TaskList';

const TaskSearch = () => {
  const [query, setQuery] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleQueryChange = (value: string) => setQuery(value);

  const fetchTasks = useCallback(async () => {
    if (query) {
      const response = await getTasks({ title: query });
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
      <InputComponent value={ query } onChange={ handleQueryChange } />
      <TaskList tasks={ tasks } />
    </div>
  );
};

export default TaskSearch;
