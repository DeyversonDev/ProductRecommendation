// useRecommendations.js

import { useState } from 'react';
import recommendationService from '../../services/recommendation';
import { RDProduct } from '../../services/product/types';
import { FormValues } from '../useForm/types';

function useRecommendations(products: RDProduct[]) {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (formData: FormValues) => {
    return recommendationService.getRecommendations(formData, products);
  };

  return { recommendations, getRecommendations, setRecommendations };
}

export default useRecommendations;
