import './ReactSlick.variants.css';

import { useSelect } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import { cn } from '##/utils/bem';

import { items } from '../__mocks__/mock.data';
import { cnReactSlick } from '../ReactSlick';

const cnReactSlickVariants = cn('ReactSlickVariants');

const Variants = () => {
  const indicatorsPosition = useSelect(
    'indicatorsPosition',
    ['bottom', 'left'],
    'bottom',
  );

  return (
    <Slider
      dots
      arrows
      className={cnReactSlick({ indicatorsPosition }, [cnReactSlickVariants()])}
    >
      {items.map((image) => (
        <div>
          <img alt="" src={image} />
        </div>
      ))}
    </Slider>
  );
};

export default Variants;
