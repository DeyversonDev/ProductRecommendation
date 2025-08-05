import React from 'react';
import Checkbox from '../../../../shared/Checkbox';
import { Props } from './types';

function OptionItem({ option, checked, onChange }: Props) {
  return (
    <li className="mb-2">
      <Checkbox
        value={option}
        checked={checked}
        onChange={() => onChange(option)}
        className="text-green-500"
      >
        {option}
      </Checkbox>
    </li>
  );
}

export default React.memo(
  OptionItem,
  (prev, next) => prev.checked === next.checked
);
