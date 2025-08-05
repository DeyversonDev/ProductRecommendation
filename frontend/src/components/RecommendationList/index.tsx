import React from 'react';
import { useSession } from '../../contexts/useSession';

function RecommendationList() {
  const { recommendedProducts } = useSession();

  return (
    <div className="p-5 lg:w-[50%] background-section rounded-xl">
      <h2 className="text-color text-lg font-bold mb-2">
        Lista de Recomendações:
      </h2>

      {recommendedProducts.length === 0 && (
        <p className="text-color">Nenhuma recomendação encontrada.</p>
      )}

      <ul>
        {recommendedProducts.map((recommendation, index) => (
          <li key={index} className="text-color option-card mb-3">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
