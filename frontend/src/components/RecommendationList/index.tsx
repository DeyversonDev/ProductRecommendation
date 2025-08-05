import React from 'react';
import { useSession } from '../../contexts/useSession';

function RecommendationList() {
  const { recommendedProducts } = useSession();

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Lista de Recomendações:</h2>

      {recommendedProducts.length === 0 && (
        <p>Nenhuma recomendação encontrada.</p>
      )}

      <ul>
        {recommendedProducts.map((recommendation, index) => (
          <li key={index} className="option-card mb-3">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
