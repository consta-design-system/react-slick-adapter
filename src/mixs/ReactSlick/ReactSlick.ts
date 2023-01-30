import './ReactSlick.css';
import 'slick-carousel/slick/slick.css';

import { cn } from '##/utils/bem';

const cnReactSlickAdapter = cn('ReactSlickAdapter');

export type CnReactSlickPropIndicatorsType =
  | 'dots'
  | 'number'
  | 'icon'
  | 'photo';

type CnReactSlickProps = {
  indicatorsPosition?: 'bottom' | 'left';
  indicatorsType?: CnReactSlickPropIndicatorsType;
};

type CnReactSlick = (
  props?: CnReactSlickProps,
  classNames?: Array<string | undefined>,
) => string;

export const cnReactSlick: CnReactSlick = (props = {}, classNames) => {
  const { indicatorsPosition = 'bottom', indicatorsType = 'dots' } = props;
  return cnReactSlickAdapter(
    {
      indicatorsPosition,
      indicatorsType,
    },
    classNames,
  );
};
