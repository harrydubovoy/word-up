import BritishFlagSvg from '../icons/BritishFlagSvg';
import UkrainianFlagSvg from '../icons/UkrainianFlagSvg';

import { FLAG_ICON_TYPE } from '../constants/icons';

function FlagIconByType({ type }) {
  if (type === FLAG_ICON_TYPE.ENG) {
    return <BritishFlagSvg />;
  }

  if (type === FLAG_ICON_TYPE.UA) {
    return <UkrainianFlagSvg />;
  }

  return null;
}

function FlagIcon({ type }) {
  return (
    <span className="inline-flex items-center justify-center w-[24px] h-[24px]">
      <FlagIconByType type={type} />
    </span>
  );
}

export default FlagIcon;
