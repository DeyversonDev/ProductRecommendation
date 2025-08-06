import axios from 'axios';
import { RDProduct } from './types';

const baseURL = 'http://localhost:3001';

const getProducts = async (): Promise<RDProduct[]> => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};

export default getProducts;
