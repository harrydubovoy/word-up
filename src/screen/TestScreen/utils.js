export const getProgress = (total, cursor) => Math.round((cursor / total) * 100);
export const getWordPairKeyByReverse = (isReversed) => isReversed ? 'native' : 'foreign';
