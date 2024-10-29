import React from 'react';
import { clsx } from 'clsx';

import { TButtonColors } from '@/blueprint/types/appTypes.ts';

interface IButton {
  type?: 'submit' | 'button';
  title: string;
  color?: TButtonColors;
  onClick?(): void;
}

const Button = ({
  title,
  type = 'button',
  color = 'blue',
  onClick,
}: IButton) => (
  <button
    type={ type }
    onClick={ onClick }
    className={ clsx('px-4 py-2 bg-blue-500 text-white rounded-xl', {
      'bg-red-500': color === 'red',
      'bg-blue-500': color === 'blue',
      'bg-gray-300': color === 'gray',
    }) }
  >
    {title}
  </button>
);

export default Button;
