import { useSelect } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import { items } from '../__mocks__/mock.data';
import { cnReactSlick } from '../ReactSlick';

const Variants = () => {
  const indicatorsPosition = useSelect(
    'indicatorsPosition',
    ['bottom', 'left'],
    'bottom',
  );

  return (
    <Slider dots arrows className={cnReactSlick({ indicatorsPosition })}>
      {items.map((image) => (
        <div>
          <img alt="" src={image} />
        </div>
      ))}
    </Slider>
  );
};

export default Variants;
