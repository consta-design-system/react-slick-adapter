import './ReactSlickIndicatorExample.css';

import { Example } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import image1 from '##/__mocks__/image1.jpeg';
import image2 from '##/__mocks__/image2.png';
import image3 from '##/__mocks__/image3.jpeg';
import image4 from '##/__mocks__/image4.jpeg';
import { cnReactSlick } from '##/mixs/ReactSlick';
import { cn } from '##/utils/bem';

import { ReactSlickIndicator } from '../../../ReactSlickIndicator';

const cnReactSlickIndicatorExample = cn('ReactSlickIndicatorExample');

const items = [image1, image2, image3, image4];
export const ReactSlickIndicatorExample = () => {
  return (
    <Example>
      <Slider
        dots
        className={cnReactSlick({}, [cnReactSlickIndicatorExample()])}
        customPaging={(index) => (
          <ReactSlickIndicator index={index} indicatorsType="number" />
        )}
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
