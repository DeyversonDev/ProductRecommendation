import { RDProduct } from '../../../../services/product/types';

export type Props = {
  onPreferenceChange: (preferences: string[]) => void;
} & Pick<RDProduct, 'preferences'>;
