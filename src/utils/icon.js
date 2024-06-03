import { WORD_PAIR_KEYS } from '../constants/word';
import { FLAG_ICON_TYPE } from '../constants/icons';

export const mapWordKeyToFlagIcon = (wordKeyType) => {
  switch (wordKeyType) {
    case WORD_PAIR_KEYS.FOREIGN: {
      return FLAG_ICON_TYPE.ENG;
    }
    case WORD_PAIR_KEYS.NATIVE: {
      return FLAG_ICON_TYPE.UA;
    }
    default: {
      return FLAG_ICON_TYPE.ENG;
    }
  }
};
