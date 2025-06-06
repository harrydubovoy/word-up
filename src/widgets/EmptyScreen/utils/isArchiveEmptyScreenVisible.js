import { EMPTY_SCREEN_TYPE } from '../constants/types';

export const isArchiveEmptyScreenVisible = (condition) => !condition && EMPTY_SCREEN_TYPE.ARCHIVE;
