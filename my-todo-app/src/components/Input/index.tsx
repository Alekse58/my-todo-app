import React from 'react';

interface IInputComponentProps {
  value: string;
  onChange(value: string): void;
}

const InputComponent = ({ value, onChange }: IInputComponentProps) => (
  <input
    type='text'
    value={ value }
    onChange={ (event) => onChange(event.target.value) }
    placeholder='Поиск по названию задачи'
    className='w-full py-3 px-4 bg-white border border-gray-300 rounded-xl'
  />
);

export default InputComponent;
