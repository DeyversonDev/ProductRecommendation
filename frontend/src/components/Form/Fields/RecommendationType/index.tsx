import Checkbox from '../../../shared/Checkbox';
import { Props } from './types';

function RecommendationType({ onRecommendationTypeChange }: Props) {
  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-xl">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center gap-3">
        <Checkbox
          type="radio"
          name="recommendationType"
          onChange={() => onRecommendationTypeChange('SingleProduct')}
        >
          Produto Único
        </Checkbox>
        <Checkbox
          type="radio"
          name="recommendationType"
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
        >
          Múltiplos Produtos
        </Checkbox>
      </div>
    </div>
  );
}

export default RecommendationType;
