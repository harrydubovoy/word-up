import classNames from 'classnames';
import { map, addIndex, nth, equals, prop, compose, reverse } from 'ramda';

import { useAppSelector } from '../../store/hooks';
import { selectEntitiesDictionary } from '../../store/reducer/dictionary.slice';

import If from '../../util-components/If';

import { getReversedWordKey } from './utils';

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
      prop(getReversedWordKey(wordKeyType)),
      prop(wordId),
    )(entitiesDictionary)
  );

  return (
    <ul className="flex flex-col gap-2">
      {addIndex(map)((wordPairId, index) => {
        const userAnswerWord = nth(index)(userAnswers);
        const isRightAnswer = compose(
          equals(userAnswerWord),
          prop(getReversedWordKey(wordKeyType)),
          prop(wordPairId),
        )(entitiesDictionary);

        return (
          <li
            key={wordPairId}
            className={classNames('relative p-2 rounded-xl', {
              'bg-panache': isRightAnswer,
              'bg-lavender-blush': !isRightAnswer,
            })}
          >
            <div className="flex justify-center">
              <span>
                {getQuestionWord(wordPairId)}
              </span>
              &nbsp;&ndash;&nbsp;
              <span className={classNames('font-semibold')}>
                {userAnswerWord}
              </span>
              <If condition={!isRightAnswer}>
                <>
                  &nbsp;
                  <span>
                    (
                    {getRightAnswer(wordPairId)}
                    )
                  </span>

                </>
              </If>
              <span className="absolute top-1.5 right-2 text-xl">
                <If condition={!isRightAnswer}>
                  🙂
                </If>
                <If condition={isRightAnswer}>
                  👍
                </If>
              </span>
            </div>
          </li>
        );
      }, reverse(ids))}
    </ul>
  );
}

export default ResultAnswersList;
