import { equals, nth } from 'ramda';

import { WORD_PAIR_KEYS } from '../../shared/constants/word';

export const getCurrentEntityId = (cursor) => (ids) => nth(cursor)(ids);
export const isTestReversed = (wordKey) => !equals(wordKey, WORD_PAIR_KEYS.FOREIGN);
export const getReversedWordKey = (wordKey) => (
  isTestReversed(wordKey) ? WORD_PAIR_KEYS.FOREIGN : WORD_PAIR_KEYS.NATIVE
);
