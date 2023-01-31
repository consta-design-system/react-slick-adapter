import './ReactSlickIndicator.css';

import { Text } from '@consta/uikit/Text';
import React from 'react';

import { CnReactSlickPropIndicatorsType } from '##/mixs/ReactSlick';
import { cn } from '##/utils/bem';

import { ReactSlickIndicatorProps } from './types';

const cnReactSlickIndicator = cn('ReactSlickIndicator');

export const ReactSlickIndicator = <
  INDICATORS extends CnReactSlickPropIndicatorsType,
>(
  props: ReactSlickIndicatorProps<INDICATORS>,
) => {
  const {
    index,
    indicatorsType = 'dots',
    image,
    icon: Icon,
    className,
    ...othetProps
  } = props;

  const renderItem = () => {
    if (indicatorsType === 'icon') {
      return Icon ? (
        <Icon className={cnReactSlickIndicator('Icon')} size="xs" />
      ) : null;
    }
    if (indicatorsType === 'photo') {
      return (
        <div className={cnReactSlickIndicator('Image')}>
          <img alt="" src={image} />
        </div>
      );
    }
    if (indicatorsType === 'number') {
      return (
        <Text view="ghost" size="xs" className={cnReactSlickIndicator('Text')}>
          {index + 1}
        </Text>
      );
    }
    return <div className={cnReactSlickIndicator('Dot')} />;
  };
  return (
    <button
      type="button"
      className={cnReactSlickIndicator(null, [className])}
      {...othetProps}
    >
      {renderItem()}
    </button>
  );
};
