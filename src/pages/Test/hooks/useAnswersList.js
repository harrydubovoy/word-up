import { addIndex, compose, equals, map, nth, prop, reverse, slice } from 'ramda';

import { useDictionary } from '../../../entities';
import { getReversedWordKey } from '../utils';

export const useAnswersList = ({ data, userAnswers, cursor, wordKeyType }) => {
  const answersIds = slice(0, cursor)(data);

  const { dictionaryEntities } = useDictionary();

  const getQuestionWord = (wordId) => (
    compose(
      prop(wordKeyType),
      prop(wordId),
    )(dictionaryEntities)
  );
  const getRightAnswer = (wordId) => (
    compose(
      prop(getReversedWordKey(wordKeyType)),
      prop(wordId),
    )(dictionaryEntities)
  );

  const answersList = addIndex(map)((wordPairId, index) => {
    const userAnswerWord = nth(index)(userAnswers);
    const isRightAnswer = compose(
      equals(userAnswerWord),
      prop(getReversedWordKey(wordKeyType)),
      prop(wordPairId),
    )(dictionaryEntities);

    const questionWord = getQuestionWord(wordPairId);
    const rightAnswer = getRightAnswer(wordPairId);

    return {
      wordPairId,
      isRightAnswer,
      questionWord,
      rightAnswer,
      userAnswerWord,
    };
  })(reverse(answersIds));

  return { answersList };
};
