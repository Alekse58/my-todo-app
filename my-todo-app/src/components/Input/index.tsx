import React from 'react';

import { Input } from '@/components/ui/input.tsx';

interface IInputComponentProps {
  id?: string;
  type?: string;
  value: string;
  label?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputComponent = ({
  id = '',
  type = 'text',
  value,
  label,
  onChange,
  placeholder = '',
}: IInputComponentProps) => (
  <div className='flex flex-col gap-1'>
    {label && (
      <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
    )}
    <Input
      id={ id }
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onChange={ (e) => onChange(e.target.value) }
      className='mt-1 text-gray-700 rounded-xl'
    />
  </div>
);

export default InputComponent;
