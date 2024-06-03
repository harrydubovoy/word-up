import classNames from 'classnames';
import { map, addIndex, nth, equals, prop, compose } from 'ramda';

import { useAppSelector } from '../../store/hooks';
import { selectEntitiesDictionary } from '../../store/reducer/dictionary.slice';

import If from '../../util-components/If';

import { getReversedWordKeys } from './utils';

function ResultAnswersList({ userAnswers, ids, wordKeyType }) {
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);

  const getQuestionWord = (wordId) => (
    compose(
      prop(wordKeyType),
      prop(wordId),
    )(entitiesDictionary)
  );
  const getRightAnswer = (wordId) => (
    compose(
      prop(wordKeyType),
      prop(wordId),
    )(entitiesDictionary)
  );

  return (
    <ul className="flex flex-col gap-2">
      {addIndex(map)((wordPairId, index) => {
        const userAnswerWord = nth(index)(userAnswers);
        const isRightAnswer = compose(
          equals(userAnswerWord),
          prop(getReversedWordKeys(wordKeyType)),
          prop(wordPairId),
        )(entitiesDictionary);

        return (
          <li key={wordPairId}>
            <div className="flex justify-center">
              <span>
                {getQuestionWord(wordPairId)}
              </span>
              &nbsp;&ndash;&nbsp;
              <span className={classNames('font-semibold', {
                'text-red-500': !isRightAnswer,
                'text-green-500': isRightAnswer,
              })}
              >
                {userAnswerWord}
              </span>
              <If condition={!isRightAnswer}>
                <>
                  &nbsp;&ndash;&nbsp;
                  <span className="text-green-500">
                    {getRightAnswer(wordPairId)}
                  </span>
                </>
              </If>
            </div>
          </li>
        );
      }, ids)}
    </ul>
  );
}

export default ResultAnswersList;
