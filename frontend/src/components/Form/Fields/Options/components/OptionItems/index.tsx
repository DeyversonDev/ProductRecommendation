import React from 'react';
import Checkbox from '../../../../../shared/Checkbox';
import { Props } from './types';

function OptionItem({ option, checked, onChange }: Props) {
  const onClick = () => onChange(option);

  return (
    <Checkbox checked={checked} onChange={onClick}>
      {option}
    </Checkbox>
  );
}

export default React.memo(
  OptionItem,
  (prev, next) => prev.checked === next.checked
);
