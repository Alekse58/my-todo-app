import React from 'react';
import { ITask } from '@/blueprint/types/TaskTypes';
import TaskItem from './TaskItem';

interface ITaskListProps {
  tasks: ITask[];
  lastTaskRef?: (node: HTMLDivElement) => void;
}

const TaskList = ({ tasks, lastTaskRef }: ITaskListProps) => (
  <div className='grid grid-cols-2 gap-5'>
    {tasks.map((task, index) => {
      if (index === tasks.length - 1) {
        return <div key={ task.id } ref={ lastTaskRef }><TaskItem data={ task } /></div>;
      }

      return <TaskItem key={ task.id } data={ task } />;
    })}
  </div>
);

export default TaskList;
