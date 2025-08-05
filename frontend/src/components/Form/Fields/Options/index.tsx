import { useCallback } from 'react';
import OptionItem from './components/OptionItems';

import { Props } from './types';

function Options({ title, options, selectedOptions, onChange }: Props) {
  const RenderOptionItem = useCallback(
    (option: string) => (
      <div key={option} className="mt-3">
        <OptionItem
          option={option}
          checked={selectedOptions.includes(option)}
          onChange={onChange}
        />
      </div>
    ),
    [onChange, selectedOptions]
  );

  return (
    <div className="p-4 mb-4 bg-gray-50 rounded-xl">
      <h2 className="text-lg font-bold mb-2">{title}:</h2>
      <ul>{options.map(RenderOptionItem)}</ul>
    </div>
  );
}

export default Options;
