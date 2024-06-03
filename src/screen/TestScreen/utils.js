import { equals, nth } from 'ramda';

import { WORD_PAIR_KEYS } from '../../constants/word';

export const getProgress = (total, cursor) => Math.round((cursor / total) * 100);
export const getCurrentEntityId = (cursor) => (ids) => nth(cursor)(ids);
export const isTestReversed = (wordKey) => !equals(wordKey, WORD_PAIR_KEYS.FOREIGN);
export const getReversedWordKeys = (wordKey) => (
  isTestReversed(wordKey) ? WORD_PAIR_KEYS.FOREIGN : WORD_PAIR_KEYS.NATIVE
);
