import './ReactSlickAdapter.variants.css';

import { useBoolean, useSelect } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import { cn } from '##/utils/bem';

import { items } from '../__mocks__/mock.data';
import { reactSlickAdapter } from '../reactSlickAdapter';

const cnReactSlickAdapterVariants = cn('ReactSlickAdapterVariants');

const Variants = () => {
  const indicatorsPosition = useSelect(
    'indicatorsPosition',
    ['bottom', 'left'],
    'bottom',
  );
  const indicatorsType = useSelect(
    'indicatorsType',
    ['dots', 'number', 'icon', 'photo'],
    'dots',
  );
  const withIndicators = useBoolean('withIndicators', true);
  const withControls = useBoolean('withControls', true);
  const slidesCount = useSelect('slidesCount', [1, 2, 3, 4], 1);

  const settings = reactSlickAdapter({
    indicatorsPosition,
    items,
    indicatorsType,
    slidesToShow: slidesCount,
    dots: withIndicators,
    arrows: withControls,
  });

  return (
    <div className={cnReactSlickAdapterVariants()}>
      <Slider {...settings}>
        {items.map((el) => (
          <div className={cnReactSlickAdapterVariants('Item')}>
            <img alt="" src={el.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Variants;
