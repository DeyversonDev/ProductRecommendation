import { useState } from 'react';
import { FormValues } from './types';

const useForm = (initialState: FormValues) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    field: keyof FormValues,
    value: string[] | FormValues['selectedRecommendationType']
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  return { formData, handleChange };
};

export default useForm;
