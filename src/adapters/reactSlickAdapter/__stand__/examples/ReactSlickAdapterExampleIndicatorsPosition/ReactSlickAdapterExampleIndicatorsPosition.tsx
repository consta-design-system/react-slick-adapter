import './ReactSlickAdapterExampleIndicatorsPosition.css';

import { Example } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import image1 from '##/__mocks__/image1.jpeg';
import image2 from '##/__mocks__/image2.png';
import image3 from '##/__mocks__/image3.jpeg';
import image4 from '##/__mocks__/image4.jpeg';
import { reactSlickAdapter } from '##/adapters/reactSlickAdapter/reactSlickAdapter';
import { cn } from '##/utils/bem';

const items = [image1, image2, image3, image4];

type Position = 'bottom' | 'left';
const positions: Position[] = ['bottom', 'left'];

const cnReactSlickAdapterExampleIndicatorsPosition = cn(
  'ReactSlickAdapterExampleIndicatorsPosition',
);

export const ReactSlickAdapterExampleIndicatorsPosition = () => {
  return (
    <Example
      col={{ 1: 0, flex: 1000 }}
      items={positions}
      getItemLabel={(position) => `indicatorsPosition=${position}`}
      getItemNode={(position: Position) => (
        <Slider
          {...reactSlickAdapter({
            indicatorsPosition: position,
            items,
            dots: true,
            className: cnReactSlickAdapterExampleIndicatorsPosition(),
          })}
        >
          {items.map((image) => (
            <div>
              <img alt="" src={image} />
            </div>
          ))}
        </Slider>
      )}
    />
  );
};
