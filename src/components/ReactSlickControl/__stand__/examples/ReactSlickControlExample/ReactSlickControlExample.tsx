import './ReactSlickControlExample.css';

import { Example } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import { cnReactSlick } from '##/mixs/ReactSlick';
import { cn } from '##/utils/bem';

import { ReactSlickControl } from '../../../ReactSlickControl';

const cnReactSlickControlExample = cn('ReactSlickControlExample');

const items: string[] = [
  'https://4kwallpapers.com/images/walls/thumbs_2t/5894.jpg',
  'https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjAzODh8fGVufDB8fHx8&w=1000&q=80',
  'https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-2880x1800-1455.jpg',
  'https://',
];
export const ReactSlickControlExample = () => {
  return (
    <Example>
      <Slider
        dots={false}
        arrows
        className={cnReactSlick({}, [cnReactSlickControlExample()])}
        nextArrow={<ReactSlickControl type="next" />}
        prevArrow={<ReactSlickControl type="prev" />}
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
