// useRecommendations.js

import { useState } from 'react';
import recommendationService from '../services/recommendation';

function useRecommendations(products) {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (formData) => {
    return recommendationService.getRecommendations(formData, products);
  };

  return { recommendations, getRecommendations, setRecommendations };
}

export default useRecommendations;
