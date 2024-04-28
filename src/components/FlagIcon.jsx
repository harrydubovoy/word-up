import BritishFlagSvg from '../icons/BritishFlagSvg';
import UkrainianFlagSvg from '../icons/UkrainianFlagSvg';

export const FLAG_ICON_TYPE = {
  UA: 'ua',
  ENG: 'eng',
}

const flagIconByType = (type) => {
  if (type === FLAG_ICON_TYPE.ENG) {
    return <BritishFlagSvg />;
  }

  if (type === FLAG_ICON_TYPE.UA) {
    return <UkrainianFlagSvg />;
  }

  return <></>;
}

const FlagIcon = ({ type }) => {
  return <span className="inline-flex items-center justify-center w-[24px] h-[24px]">{flagIconByType(type)}</span>;
}

export default FlagIcon;
