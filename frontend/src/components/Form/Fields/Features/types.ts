import { RDProduct } from '../../../../services/product/types';

export type Props = {
  onFeatureChange: (features: string[]) => void;
} & Pick<RDProduct, 'features'>;
