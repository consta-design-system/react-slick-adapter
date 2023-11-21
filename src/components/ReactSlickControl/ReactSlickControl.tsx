import './ReactSlickControl.css';

import { IconArrowLeft } from '@consta/icons/IconArrowLeft';
import { IconArrowRight } from '@consta/icons/IconArrowRight';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { cn } from '##/utils/bem';

const cnReactSlickControl = cn('ReactSlickControl');

type Props = Omit<React.ComponentProps<typeof Button>, 'type'> & {
  type?: 'prev' | 'next';
};

export const ReactSlickControl = (props: Props) => {
  const { type = 'prev', className, ...otherProps } = props;
  return (
    <Button
      onlyIcon
      className={cnReactSlickControl({ type }, [className])}
      iconLeft={type === 'prev' ? IconArrowLeft : IconArrowRight}
      size="xs"
      view="clear"
      form="round"
      type="button"
      {...otherProps}
    />
  );
};
