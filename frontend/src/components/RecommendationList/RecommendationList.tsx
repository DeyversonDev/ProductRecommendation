import React from 'react';
import { useSession } from '../../contexts/useSession';

function RecommendationList() {
  const { recommendedProducts } = useSession();

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendedProducts.length === 0 && (
        <p>Nenhuma recomendação encontrada.</p>
      )}

      <ul>
        {recommendedProducts.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
