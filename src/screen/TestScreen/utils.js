import { WORD_PAIR_KEYS } from '../../constants/word';

export const getProgress = (total, cursor) => Math.round((cursor / total) * 100);
export const getWordPairKeyByReverse = (isReversed) => (
  isReversed ? WORD_PAIR_KEYS.NATIVE : WORD_PAIR_KEYS.FOREIGN
);
