import { FormValues } from '../../../../hooks/useForm/types';

export type Props = {
  onRecommendationTypeChange: (
    recommendationType: 'SingleProduct' | 'MultipleProducts'
  ) => void;
  value: FormValues['selectedRecommendationType'];
};
