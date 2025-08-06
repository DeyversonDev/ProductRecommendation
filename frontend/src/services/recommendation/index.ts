import { RDProduct } from '../product/types';
import { RecommendationService } from './types';

const recommendationService: RecommendationService = {
  getRecommendations: (formData, products = []) => {
    const allOptionsToMatch = new Set([
      ...formData.selectedPreferences,
      ...formData.selectedFeatures,
    ]);

    let productsWithMatch: RDProduct[][] = [];

    for (const product of products) {
      let matchCount = 0;

      for (const preference of product.preferences) {
        if (allOptionsToMatch.has(preference)) matchCount++;
      }

      for (const feature of product.features) {
        if (allOptionsToMatch.has(feature)) matchCount++;
      }

      if (matchCount > 0) {
        const hasMatchCountProducts = productsWithMatch[matchCount];

        if (!hasMatchCountProducts) {
          productsWithMatch[matchCount] = [];
        }

        productsWithMatch[matchCount].push(product);
      }
    }

    const recommendedProducts = productsWithMatch.flat().reverse();

    if (formData?.selectedRecommendationType === 'SingleProduct')
      return recommendedProducts.slice(0, 1);

    return recommendedProducts;
  },
};

export default recommendationService;
