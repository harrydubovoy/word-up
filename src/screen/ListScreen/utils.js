import { length } from 'ramda';
import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

export const getEmptyScreenType = ({ idsDictionary, filteredIdsDictionary }) => {
  if (!length(idsDictionary)) {
    return EMPTY_SCREEN_TYPE.DEFAULT;
  }

  if (!length(filteredIdsDictionary)) {
    return EMPTY_SCREEN_TYPE.DEFAULT;
  }

  return null;
};
