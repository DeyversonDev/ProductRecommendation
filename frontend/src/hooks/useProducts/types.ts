import { RDProduct } from '../../services/product/types';

export type ProductsState = {
  preferences: string[];
  features: string[];
  products: RDProduct[];
};
