import { length } from 'ramda';
import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

export const getEmptyScreenType = ({ idsDictionary, filteredIdsDictionary }) => {
  if (!length(idsDictionary)) {
    return EMPTY_SCREEN_TYPE.LIST;
  }

  if (!length(filteredIdsDictionary)) {
    return EMPTY_SCREEN_TYPE.FILTERED_LIST;
  }

  return null;
};
