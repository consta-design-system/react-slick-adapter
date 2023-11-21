import './ReactSlickAdapterExampleIndicatorsType.css';

import { IconComponent } from '@consta/icons/Icon';
import { IconBag } from '@consta/icons/IconBag';
import { IconLightningBolt } from '@consta/icons/IconLightningBolt';
import { IconMoon } from '@consta/icons/IconMoon';
import { IconSun } from '@consta/icons/IconSun';
import { Example } from '@consta/stand';
import React from 'react';
import Slider from 'react-slick';

import image1 from '##/__mocks__/image1.jpeg';
import image2 from '##/__mocks__/image2.png';
import image3 from '##/__mocks__/image3.jpeg';
import image4 from '##/__mocks__/image4.jpeg';
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
    image: image1,
    icon: IconSun,
  },
  {
    image: image2,
    icon: IconMoon,
  },
  {
    image: image3,
    icon: IconLightningBolt,
  },
  {
    image: image4,
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
