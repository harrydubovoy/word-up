import { nth, equals, prop, compose, reverse } from 'ramda';
import { cn } from '../../lib/utils';

import { Box } from '../../ui/Box';

import { useAppSelector } from '../../store/hooks';
import { selectEntitiesDictionary } from '../../store/reducer/dictionary.slice';

import { If } from '../../util-components/If';
import { List } from '../../util-components/List';

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
    <Box htmltag="ul" className="flex flex-col gap-2">
      <List.Map array={reverse(ids)}>
        {(wordPairId, index) => {
          const userAnswerWord = nth(index)(userAnswers);
          const isRightAnswer = compose(
            equals(userAnswerWord),
            prop(getReversedWordKey(wordKeyType)),
            prop(wordPairId),
          )(entitiesDictionary);

          return (
            <Box
              htmltag="li"
              key={wordPairId}
              className={cn('relative py-2 px-8 rounded-xl text-slate-600', {
                'bg-panache': isRightAnswer,
                'bg-lavender-blush': !isRightAnswer,
              })}
            >
              <Box className="flex justify-center flex-wrap">
                <Box htmltag="span">
                  {getQuestionWord(wordPairId)}
                </Box>
                &nbsp;&ndash;&nbsp;
                <Box htmltag="span" className={cn('font-semibold')}>
                  {userAnswerWord}
                </Box>
                <If condition={!isRightAnswer}>
                  <>
                    &nbsp;
                    <Box htmltag="span">
                      (
                      {getRightAnswer(wordPairId)}
                      )
                    </Box>
                  </>
                </If>
                <Box htmltag="span" className="absolute top-1.5 right-2 text-xl">
                  <If condition={!isRightAnswer}>
                    🙂
                  </If>
                  <If condition={isRightAnswer}>
                    👍
                  </If>
                </Box>
              </Box>
            </Box>
          );
        }}
      </List.Map>
    </Box>
  );
}

export default ResultAnswersList;
