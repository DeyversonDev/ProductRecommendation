import { FormValues } from '../../hooks/useForm/types';
import { RDProduct } from '../product/types';

export type RecommendationService = {
  getRecommendations: (
    formData?: FormValues,
    products?: RDProduct[]
  ) => RDProduct[];
};
