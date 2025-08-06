import { useReducer } from 'react';
import { Action, FormValues } from './types';

const initialState: FormValues = {
  selectedPreferences: [],
  selectedFeatures: [],
  selectedRecommendationType: 'SingleProduct',
};

const formReducer = (state: FormValues, action: Action): FormValues => {
  const { field, value } = action;

  const toggleListValue = () => {
    const currentValues = state[field] as string[];

    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    return {
      ...state,
      [field]: updatedValues,
    };
  };

  const actions = {
    selectedPreferences: toggleListValue,
    selectedFeatures: toggleListValue,
    selectedRecommendationType: () => ({
      ...state,
      [field]: value,
    }),
  };

  return actions[field]();
};

const useForm = () => {
  const [formData, setFormData] = useReducer(formReducer, initialState);

  const handleChange = (field: keyof FormValues, value: Action['value']) => {
    setFormData({ field, value });
  };

  return { formData, handleChange };
};

export default useForm;
