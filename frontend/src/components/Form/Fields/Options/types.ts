import { RDProduct } from '../../../../services/product/types';

export type Props = {
  title: string;
  onChange: (options: string[]) => void;
  options: RDProduct['features'] | RDProduct['preferences'];
};
