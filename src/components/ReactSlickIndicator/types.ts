import { IconComponent } from '@consta/uikit/Icon';

import { CnReactSlickPropIndicatorsType } from '##/mixs/ReactSlick';

export type ReactSlickIndicatorProps<
  INDICATORS extends CnReactSlickPropIndicatorsType,
> = JSX.IntrinsicElements['button'] & {
  index: number;
  indicatorsType?: INDICATORS;
  icon?: IconComponent;
  image?: string;
} & (INDICATORS extends 'photo' ? { image: string } : {}) &
  (INDICATORS extends 'icon' ? { icon: IconComponent } : {});
