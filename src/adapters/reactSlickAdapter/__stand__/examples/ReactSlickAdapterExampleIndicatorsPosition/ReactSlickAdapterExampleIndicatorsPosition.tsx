import './ReactSlickAdapterExampleIndicatorsPosition.css';

import { Example } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import { reactSlickAdapter } from '##/adapters/reactSlickAdapter/reactSlickAdapter';
import { cn } from '##/utils/bem';

const items: string[] = [
  'https://4kwallpapers.com/images/walls/thumbs_2t/5894.jpg',
  'https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjAzODh8fGVufDB8fHx8&w=1000&q=80',
  'https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-2880x1800-1455.jpg',
  'https://www.gannett-cdn.com/presto/2019/09/24/USAT/ca65ec63-180e-4edd-b92e-38cd0af795a9-catalina.jpg?crop=1279%2C720%2Cx0%2Cy278&width=1200',
];

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
