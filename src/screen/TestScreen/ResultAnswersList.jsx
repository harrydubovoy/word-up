import classNames from 'classnames';
import { map, addIndex, nth, equals, prop, compose } from 'ramda';

import { useAppSelector } from '../../store/hooks'
import { selectEntitiesDictionary } from '../../store/reducer/dictionary.slice';

import If from '../../util-components/If'
import { getWordPairKeyByReverse } from './utils';

const ResultAnswersList = ({ userAnswers, ids, isTestReversed }) => {
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);

  return (
    <ul className="flex flex-col gap-2">
      {addIndex(map)((wordPairId, index) => {
        const userAnswerWord = nth(index)(userAnswers);
        const isRightAnswer = compose(
          equals(userAnswerWord),
          prop(getWordPairKeyByReverse(!isTestReversed)),
          prop(wordPairId),
        )(entitiesDictionary);
        const questionWord = compose(
          prop(getWordPairKeyByReverse(isTestReversed)),
          prop(wordPairId),
        )(entitiesDictionary);
        const rightAnswerWord = compose(
          prop(getWordPairKeyByReverse(!isTestReversed)),
          prop(wordPairId),
        )(entitiesDictionary);

        return (
          <li key={wordPairId}>
            <div className="flex justify-center">
              <span>
                {questionWord}
              </span>
              &nbsp;&ndash;&nbsp;
              <span className={classNames('font-semibold', {
                'text-red-500': !isRightAnswer,
                'text-green-500': isRightAnswer,
              })}>
                {userAnswerWord}
              </span>
              <If condition={!isRightAnswer}>
                <>
                  &nbsp;&ndash;&nbsp;
                  <span className="text-green-500">
                   {rightAnswerWord}
                  </span>
                </>
              </If>
            </div>
          </li>
        )
      }, ids)}
    </ul>
  );
}

export default ResultAnswersList;
