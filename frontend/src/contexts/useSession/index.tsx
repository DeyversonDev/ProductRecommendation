import React, { createContext, useContext, useState } from 'react';
import { SessionContextType, SessionProviderProps } from './types';
import useProducts from '../../hooks/useProducts';

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}) => {
  const { preferences, features, products } = useProducts();

  const [recommendedProducts, setRecommendedProducts] = useState<
    SessionContextType['recommendedProducts']
  >([]);

  const contextValue: SessionContextType = {
    recommendedProducts,
    setRecommendedProducts,
    preferences,
    features,
    products,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
