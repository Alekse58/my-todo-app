import React, { useEffect, useState } from 'react';
import { ITask, ITaskResponse } from '@/blueprint/types/TaskTypes';
import { getTasks } from '@/blueprint/api/tasksApi';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response: ITaskResponse = await getTasks({ page: 1, limit: 10 });
      setTasks(response.items);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={ task.id } data={ task } />
      ))}
    </div>
  );
};

export default TaskList;
