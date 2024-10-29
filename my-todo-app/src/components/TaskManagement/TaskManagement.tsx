import React, { useState, useEffect } from 'react';
import { ETaskStatus, ITask } from '@/blueprint/types/TaskTypes.ts';
import { getTasks } from '@/blueprint/api/tasksApi.ts';
import StatusBar from '../StatusBar';
import TaskList from '../TaskItem/TaskList';

const TaskManagement = () => {
  const [selectedStatuses, setSelectedStatuses] = useState<ETaskStatus[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleStatusChange = (newStatuses: ETaskStatus[]) => {
    setSelectedStatuses(newStatuses);
  };

  const fetchTasks = async (statuses: ETaskStatus[]) => {
    const response = await getTasks({ statuses });
    setTasks(response.items);
  };

  useEffect(() => {
    fetchTasks(selectedStatuses);
  }, [selectedStatuses]);

  return (
    <div>
      <StatusBar statuses={ selectedStatuses } onChange={ handleStatusChange } fetchTasks={ fetchTasks } />
      <TaskList tasks={ tasks } />
    </div>
  );
};

export default TaskManagement;
