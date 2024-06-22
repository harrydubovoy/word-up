import { equals } from 'ramda';

import { Box } from '../ui/Box';
import { If } from '../util-components/If';

import BritishFlagSvg from '../icons/BritishFlagSvg';
import UkrainianFlagSvg from '../icons/UkrainianFlagSvg';

import { FLAG_ICON_TYPE } from '../constants/icons';

function FlagIcon({ type }) {
  return (
    <Box htmltag="span" className="inline-flex items-center justify-center w-[24px] h-[24px]">
      <If condition={equals(type, FLAG_ICON_TYPE.ENG)}>
        <BritishFlagSvg />
      </If>
      <If condition={equals(type, FLAG_ICON_TYPE.UA)}>
        <UkrainianFlagSvg />
      </If>
    </Box>
  );
}

export { FlagIcon };
