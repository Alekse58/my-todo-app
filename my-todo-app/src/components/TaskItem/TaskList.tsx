import React from 'react';
import { ITask } from '@/blueprint/types/TaskTypes';
import TaskItem from './TaskItem';

interface ITaskListProps {
  tasks: ITask[];
}

const TaskList = ({ tasks }: ITaskListProps) => (
  <div>
    {tasks.map((task) => (
      <TaskItem key={ task.id } data={ task } />
    ))}
  </div>
);

export default TaskList;
