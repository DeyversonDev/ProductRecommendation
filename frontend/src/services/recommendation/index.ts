import { RDProduct } from '../product/types';
import { RecommendationService } from './types';

const calculateMatchScore = (
  product: RDProduct,
  allOptionsToMatch: Set<string>
): number => {
  let score = 0;

  for (const preference of product.preferences) {
    if (allOptionsToMatch.has(preference)) score++;
  }

  for (const feature of product.features) {
    if (allOptionsToMatch.has(feature)) score++;
  }

  return score;
};

const applyRecommendationType = (
  products: RDProduct[],
  type?: string
): RDProduct[] => {
  if (type === 'SingleProduct') return products.slice(0, 1);

  return products;
};

const recommendationService: RecommendationService = {
  getRecommendations: (formData, products = []) => {
    const allOptionsToMatch = new Set([
      ...formData.selectedPreferences,
      ...formData.selectedFeatures,
    ]);

    const productsWithMatch: RDProduct[][] = [];

    for (const product of products) {
      const score = calculateMatchScore(product, allOptionsToMatch);

      if (score > 0) {
        if (!productsWithMatch[score]) productsWithMatch[score] = [];

        productsWithMatch[score].push(product);
      }
    }

    const recommendedProducts = productsWithMatch.flat().reverse();

    return applyRecommendationType(
      recommendedProducts,
      formData?.selectedRecommendationType
    );
  },
};

export default recommendationService;
