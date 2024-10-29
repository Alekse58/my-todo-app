import React from 'react';
import { clsx } from 'clsx';

import { ETaskStatus } from '@/blueprint/types/TaskTypes.ts';
import { STATUS_TASK_TEXT } from '@/blueprint/constante/task.ts';

interface IStatusBarProps {
  statuses: ETaskStatus[];
  onChange(value: ETaskStatus[]): void;
  fetchTasks: (statuses: ETaskStatus[]) => void;
}

const StatusBar = ({ statuses, onChange, fetchTasks }: IStatusBarProps) => {
  const renderButton = (status: ETaskStatus, index: number) => {
    const checked = statuses.includes(status);

    return (
      <button
        key={ `${status}_${index}` }
        onClick={ () => {
          const newStatuses = checked
            ? statuses.filter(item => item !== status)
            : [...statuses, status];

          onChange(newStatuses);
          fetchTasks(newStatuses);
        } }
        className={ clsx(
          'mb-4 px-4 py-2 border border-black/20 rounded-xl duration-200',
          checked ? 'bg-blue-600 border-blue-600 text-white' : 'text-black',
        ) }
      >
        {STATUS_TASK_TEXT[status]}
      </button>
    );
  };

  const renderContent = () => Object.values(ETaskStatus).map((status, index) => (
    renderButton(status, index)
  ));

  const isAnyStatusSelected = statuses.length > 0;

  return (
    <div className='flex gap-4 mt-4'>
      <button
        onClick={ () => {
          onChange([]);
          fetchTasks([]);
        } }
        className={ clsx(
          'mb-4 px-4 py-2 border border-black/20 rounded-xl duration-200',
          isAnyStatusSelected ? 'text-black' : 'bg-blue-600 text-white',
        ) }
      >
        Все
      </button>
      {renderContent()}
    </div>
  );
};

export default StatusBar;
