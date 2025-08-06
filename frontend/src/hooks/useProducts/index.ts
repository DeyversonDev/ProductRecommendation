import { useCallback, useEffect, useState } from 'react';
import getProducts from '../../services/product';

import { ProductsState } from './types';

const useProducts = () => {
  const [state, setState] = useState<ProductsState>({
    preferences: [],
    features: [],
    products: [],
  });

  const fetchData = useCallback(async () => {
    try {
      const products = await getProducts();
      const allPreferences: string[] = [];
      const allFeatures: string[] = [];

      products.forEach((product) => {
        const productPreferences = product.preferences
          .sort(() => Math.random() - 0.5)
          .slice(0, 2);

        allPreferences.push(...productPreferences);

        const productFeatures = product.features
          .sort(() => Math.random() - 0.5)
          .slice(0, 2);

        allFeatures.push(...productFeatures);
      });

      setState({
        preferences: allPreferences,
        features: allFeatures,
        products,
      });
    } catch (error) {
      console.error('Erro ao obter os produtos:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return state;
};

export default useProducts;
