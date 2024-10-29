import React from 'react';

import { ITask } from '@/blueprint/types/TaskTypes';

import TaskItem from './TaskItem';

interface ITaskListProps {
  tasks: ITask[];
}

const TaskList = ({ tasks = [] }: ITaskListProps) => {
  const renderList = () => tasks?.map((task) => (
    <TaskItem key={ task.id } data={ task } />
  ));

  return (
    <div className='grid grid-cols-2 gap-5'>
      {renderList()}
    </div>
  );
};

export default TaskList;
