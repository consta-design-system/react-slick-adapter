import { CnReactSlickPropIndicatorsType } from '##/mixs/ReactSlick';

import {
  DefaultReactSlickAdapterItem,
  ReactSlickAdapterPropGetItemIcon,
  ReactSlickAdapterPropGetItemImage,
  ReactSlickAdapterProps,
} from './types';

const defaultGetItemImage: ReactSlickAdapterPropGetItemImage<
  DefaultReactSlickAdapterItem
> = (item) => item.image;

const defaultGetItemIcon: ReactSlickAdapterPropGetItemIcon<
  DefaultReactSlickAdapterItem
> = (item) => item.icon;

export function withDefaultGetters<
  INDICATORS extends CnReactSlickPropIndicatorsType,
  ITEM = DefaultReactSlickAdapterItem,
>(props: ReactSlickAdapterProps<INDICATORS, ITEM>) {
  return {
    ...props,
    getItemImage: props.getItemImage || defaultGetItemImage,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
  };
}
