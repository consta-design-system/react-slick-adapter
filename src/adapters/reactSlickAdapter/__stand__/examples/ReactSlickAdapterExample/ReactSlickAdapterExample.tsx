import './ReactSlickAdapterExample.css';

import { Example } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import Image1 from '##/__mocks__/image1.jpeg';
import Image2 from '##/__mocks__/image2.png';
import Image3 from '##/__mocks__/image3.jpeg';
import Image4 from '##/__mocks__/image4.jpeg';
import { reactSlickAdapter } from '##/adapters/reactSlickAdapter/reactSlickAdapter';
import { cn } from '##/utils/bem';

const items: string[] = [Image1, Image2, Image3, Image4];

const cnReactSlickAdapterExample = cn('ReactSlickAdapterExample');
export const ReactSlickAdapterExample = () => {
  const settings = reactSlickAdapter({ dots: true, arrows: true });

  return (
    <Example>
      <div className={cnReactSlickAdapterExample()}>
        <Slider {...settings}>
          {items.map((image) => (
            <div>
              <img alt="" src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </Example>
  );
};
