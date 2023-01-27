import React from 'react';
import { Settings } from 'react-slick';

import { ReactSlickControl } from '##/components/ReactSlickControl';
import { ReactSlickIndicator } from '##/components/ReactSlickIndicator';
import {
  cnReactSlick,
  CnReactSlickPropIndicatorsType,
} from '##/mixs/ReactSlick';

import { withDefaultGetters } from './helper';
import { DefaultReactSlickAdapterItem, ReactSlickAdapterProps } from './types';

export const reactSlickAdapter = <
  INDICATORS extends CnReactSlickPropIndicatorsType,
  ITEM = DefaultReactSlickAdapterItem,
>(
  props: ReactSlickAdapterProps<INDICATORS, ITEM>,
): Settings => {
  const {
    className,
    items,
    getItemImage,
    getItemIcon,
    indicatorsType = 'dots',
    nextArrow = <ReactSlickControl type="next" />,
    prevArrow = <ReactSlickControl type="prev" />,
    customPaging,
    indicatorsPosition = 'bottom',
    ...otherProps
  } = withDefaultGetters(props);

  const getIconByIndex = (index: number) => {
    return items ? getItemIcon(items[index]) : undefined;
  };

  const getImageByIndex = (index: number) => {
    return items ? getItemImage(items[index]) : undefined;
  };
  return {
    className: cnReactSlick({ indicatorsPosition, indicatorsType }, [
      className,
    ]),
    nextArrow,
    customPaging:
      customPaging ??
      ((index) => (
        <ReactSlickIndicator
          index={index}
          indicatorsType={indicatorsType}
          icon={getIconByIndex(index)}
          image={getImageByIndex(index)}
        />
      )),
    prevArrow,
    ...otherProps,
  };
};
