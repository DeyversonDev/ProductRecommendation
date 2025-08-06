export type FormValues = {
  selectedPreferences: string[];
  selectedFeatures: string[];
  selectedRecommendationType: 'SingleProduct' | 'MultipleProducts';
};

export type Action = {
  field: keyof FormValues;
  value: string;
};
