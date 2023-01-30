import './ReactSlickExample.css';

import { Example } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import Image1 from '##/__mocks__/image1.jpeg';
import Image2 from '##/__mocks__/image2.png';
import Image3 from '##/__mocks__/image3.jpeg';
import Image4 from '##/__mocks__/image4.jpeg';
import { cnReactSlick } from '##/mixs/ReactSlick';
import { cn } from '##/utils/bem';

const cnReactSlickExample = cn('ReactSlickExample');
const items: string[] = [Image1, Image2, Image3, Image4];

export const ReactSlickExample = () => {
  return (
    <Example>
      <Slider
        dots
        arrows
        className={cnReactSlick({ indicatorsPosition: 'bottom' }, [
          cnReactSlickExample(),
        ])}
      >
        {items.map((image) => (
          <div>
            <img alt="" src={image} />
          </div>
        ))}
      </Slider>
    </Example>
  );
};
