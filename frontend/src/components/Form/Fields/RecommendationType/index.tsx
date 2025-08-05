import Checkbox from '../../../shared/Checkbox';
import { Props } from './types';

function RecommendationType({ onRecommendationTypeChange, value }: Props) {
  return (
    <div className="mb-4 p-5 background-section rounded-xl">
      <h2 className="text-color text-lg font-bold mb-2">
        Tipo de Recomendação:
      </h2>
      <div className="flex items-center gap-3">
        <Checkbox
          type="radio"
          checked={value === 'SingleProduct'}
          name="recommendationType"
          onChange={() => onRecommendationTypeChange('SingleProduct')}
        >
          Produto Único
        </Checkbox>
        <Checkbox
          type="radio"
          checked={value === 'MultipleProducts'}
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
