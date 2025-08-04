import { RDProduct } from '../product/types';

export type RecommendationService = {
  getRecommendations: (
    formData?: {
      selectedPreferences?: string[];
      selectedFeatures?: string[];
      selectedRecommendationType: 'SingleProduct' | 'MultipleProducts';
    },
    products?: RDProduct[]
  ) => RDProduct[];
};
