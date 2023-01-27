import './ReactSlickAdapterExampleIndicatorsType.css';

import { Example } from '@consta/stand';
import { IconComponent } from '@consta/uikit/Icon';
import { IconBag } from '@consta/uikit/IconBag';
import { IconLightningBolt } from '@consta/uikit/IconLightningBolt';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconSun } from '@consta/uikit/IconSun';
import React from 'react';
import Slider from 'react-slick';

import { reactSlickAdapter } from '##/adapters/reactSlickAdapter/reactSlickAdapter';
import { CnReactSlickPropIndicatorsType } from '##/mixs/ReactSlick';
import { cn } from '##/utils/bem';

const cnReactSlickAdapterExampleIndicatorsType = cn(
  'ReactSlickAdapterExampleIndicatorsType',
);
export type Item = {
  image: string;
  icon: IconComponent;
};

export const items: Item[] = [
  {
    image: 'https://4kwallpapers.com/images/walls/thumbs_2t/5894.jpg',
    icon: IconSun,
  },
  {
    image:
      'https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjAzODh8fGVufDB8fHx8&w=1000&q=80',
    icon: IconMoon,
  },
  {
    image:
      'https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-2880x1800-1455.jpg',
    icon: IconLightningBolt,
  },
  {
    image:
      'https://www.gannett-cdn.com/presto/2019/09/24/USAT/ca65ec63-180e-4edd-b92e-38cd0af795a9-catalina.jpg?crop=1279%2C720%2Cx0%2Cy278&width=1200',
    icon: IconBag,
  },
];

const indicatorTypes: CnReactSlickPropIndicatorsType[] = [
  'dots',
  'number',
  'icon',
  'photo',
];

export const ReactSlickAdapterExampleIndicatorsType = () => {
  return (
    <Example
      col={{ 2: 0, flex: 700 }}
      items={indicatorTypes}
      getItemLabel={(type) => `indicatorsType=${type}`}
      getItemNode={(type: CnReactSlickPropIndicatorsType) => (
        <Slider
          {...reactSlickAdapter({
            indicatorsType: type,
            items,
            dots: true,
            className: cnReactSlickAdapterExampleIndicatorsType(),
          })}
        >
          {items.map((el) => (
            <div>
              <img alt="" src={el.image} />
            </div>
          ))}
        </Slider>
      )}
    />
  );
};
