import { IconComponent } from '@consta/icons/Icon';
import { Settings } from 'react-slick';

import { CnReactSlickPropIndicatorsType } from '##/mixs/ReactSlick';

export type DefaultReactSlickAdapterItem = {
  icon?: IconComponent;
  image?: string;
};

export type ReactSlickAdapterPropGetItemIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type ReactSlickAdapterPropGetItemImage<ITEM> = (
  item: ITEM,
) => string | undefined;

export type ReactSlickAdapterProps<
  INDICATORS extends CnReactSlickPropIndicatorsType,
  ITEM = DefaultReactSlickAdapterItem,
> = Settings & {
  items?: ITEM[];
  indicatorsPosition?: 'bottom' | 'left';
  indicatorsType?: INDICATORS;
  getItemImage?: ReactSlickAdapterPropGetItemImage<ITEM>;
  getItemIcon?: ReactSlickAdapterPropGetItemIcon<ITEM>;
} & (INDICATORS extends 'photo'
    ? { getItemImage: ReactSlickAdapterPropGetItemImage<ITEM> }
    : {}) &
  (INDICATORS extends 'icon'
    ? { getItemIcon: ReactSlickAdapterPropGetItemIcon<ITEM> }
    : {});
