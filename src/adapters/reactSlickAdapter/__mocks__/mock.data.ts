import { IconComponent } from '@consta/uikit/Icon';
import { IconBag } from '@consta/uikit/IconBag';
import { IconLightningBolt } from '@consta/uikit/IconLightningBolt';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IconSun } from '@consta/uikit/IconSun';

import Image1 from '##/__mocks__/image1.jpeg';
import Image2 from '##/__mocks__/image2.png';
import Image3 from '##/__mocks__/image3.jpeg';
import Image4 from '##/__mocks__/image4.jpeg';

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
