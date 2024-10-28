import React from 'react';
import { clsx } from 'clsx';

import { ETaskStatus } from '@/blueprint/types/TaskTypes.ts';
import { STATUS_TASK_TEXT } from '@/blueprint/constante/task.ts';

interface IStatusBarProps {
  statuses: ETaskStatus[];
  onChange(value: ETaskStatus[]): void;
}

const StatusBar = ({ statuses, onChange }: IStatusBarProps) => {
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
        } }
        className={ clsx(
          'mb-4 px-4 py-2 border border-black rounded-xl duration-200',
          checked ? 'bg-blue-600 border-blue-600 text-white' : 'text-black ',
        ) }
      >
        {STATUS_TASK_TEXT[status]}
      </button>
    );
  };

  const renderContent = () => Object.values(ETaskStatus).map((status, index) => (
    renderButton(status, index)
  ));

  return (
    <div className='flex gap-4 mt-4'>
      <button
        onClick={ () => onChange([]) }
        className='mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl'
      >
        Все
      </button>
      {renderContent()}
    </div>
  );
};

export default StatusBar;
