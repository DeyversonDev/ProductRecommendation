import { RDProduct } from '../../services/product/types';

export type SessionProviderProps = {
  children: React.ReactNode;
};

export type SessionContextType = {
  recommendedProducts: RDProduct[];
  setRecommendedProducts: (products: RDProduct[]) => void;
};
