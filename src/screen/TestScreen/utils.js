import { length, nth } from 'ramda';

const getProgress = (data, cursor) => Math.round((cursor / length(data)) * 100);
const getQuestionWordKeyByReverse = (isReversed) => isReversed ? 'native' : 'foreign';
const getAnswerWordKeyByReverse = (isReversed) => isReversed ? 'foreign' : 'native';

export {
  getProgress,
  getQuestionWordKeyByReverse,
  getAnswerWordKeyByReverse,
}
