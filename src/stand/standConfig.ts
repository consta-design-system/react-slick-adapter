import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta react-slick-adapter',
  id: 'react-slick-adapter',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Адаптеры',
      id: 'adapters',
      view: 'card',
      initialOpen: true,
    },
    {
      title: 'Миксины',
      id: 'mixs',
      initialOpen: true,
    },
    {
      title: 'Компоненты',
      id: 'components',
      initialOpen: true,
    },
  ],
  group: 'Адаптеры',
  image,
  description: 'Библиотека реализующая адаптер для react-slick.',
  repositoryUrl: 'https://github.com/consta-design-system/react-slick-adapter',
  figmaUrl:
    'https://www.figma.com/file/LKYyjgQ3khFHvXraZAG1n1/Consta-Components?type=design&node-id=2233-103376&t=h5q4xoKa2C1fSb91-0',
});
