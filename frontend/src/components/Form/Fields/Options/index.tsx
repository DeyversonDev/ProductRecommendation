import React, { useState } from 'react';
import Checkbox from '../../../shared/Checkbox';
import { Props } from './types';

function Options({ title, options, onChange }: Props) {
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);

  const handleFeatureChange = (feature: string) => {
    const updatedFeatures = currentOptions.includes(feature)
      ? currentOptions.filter((pref) => pref !== feature)
      : [...currentOptions, feature];

    setCurrentOptions(updatedFeatures);
    onChange(updatedFeatures);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">{title}:</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={option}
              checked={currentOptions.includes(option)}
              onChange={() => handleFeatureChange(option)}
              className="text-green-500"
            >
              {option}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Options;
