import './ReactSlickControl.css';

import { Button } from '@consta/uikit/Button';
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import React from 'react';

import { cn } from '##/utils/bem';

const cnReactSlickControl = cn('ReactSlickControl');

type Props = React.ComponentProps<typeof Button> & {
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
      {...otherProps}
    />
  );
};
