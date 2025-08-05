import React from 'react';
import { Props } from './types';

function Checkbox({ children, ...props }: Props) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        {...props}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
