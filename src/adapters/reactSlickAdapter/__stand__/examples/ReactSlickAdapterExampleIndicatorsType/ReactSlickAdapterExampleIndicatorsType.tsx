import './ReactSlickAdapterExampleIndicatorsType.css';

import { Example } from '@consta/stand';
import { IconComponent } from '@consta/uikit/Icon';
import { IconBag } from '@consta/uikit/IconBag';
import { IconLightningBolt } from '@consta/uikit/IconLightningBolt';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconSun } from '@consta/uikit/IconSun';
import React from 'react';
import Slider from 'react-slick';

import Image1 from '##/__mocks__/image1.jpeg';
import Image2 from '##/__mocks__/image2.png';
import Image3 from '##/__mocks__/image3.jpeg';
import Image4 from '##/__mocks__/image4.jpeg';
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
    image: Image1,
    icon: IconSun,
  },
  {
    image: Image2,
    icon: IconMoon,
  },
  {
    image: Image3,
    icon: IconLightningBolt,
  },
  {
    image: Image4,
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
