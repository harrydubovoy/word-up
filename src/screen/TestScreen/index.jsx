import { useState, useRef } from 'react';
import {
  compose,
  prepend,
  slice,
  lt,
  prop,
  inc,
} from 'ramda';
import { SendHorizontal } from 'lucide-react';

import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { Progress } from '../../ui/Progress';
import { Typography } from '../../ui/Typography';
import { Box } from '../../ui/Box';

import Header from './Header';

import ResultAnswersList from './ResultAnswersList';
import Restart from './Restart';
import QuestionWord from './QuestionWord';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';
import { If } from '../../util-components/If';
import EmptyScreen from '../EmptyScreen';

import { useTranslation } from '../../translations';
import { TEST_SCREEN__PROGRESS_LABEL } from '../../translations/resources/constants';

import { useAppSelector } from '../../store/hooks';
import { selectIdsTestPlan, selectTotalTestPlan } from '../../store/reducer/test-plan.slice';
import { selectEntitiesDictionary } from '../../store/reducer/dictionary.slice';

import { getProgress, getCurrentEntityId, getReversedWordKey } from './utils';
import { getTargetValue, getRefValue, setRefValue, isEnterKey } from '../../utils/input';
import { shuffleArray } from '../../utils/list';
import { normalizeValue } from '../../utils/string';

import { WORD_PAIR_KEYS } from '../../constants/word';
import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

function TestScreen() {
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const idsTestPlan = useAppSelector(selectIdsTestPlan);
  const totalTestPlan = useAppSelector(selectTotalTestPlan);

  const [data, setData] = useState(() => shuffleArray(idsTestPlan));

  const { t } = useTranslation();

  const answerInputRef = useRef(null);

  const [wordKeyType, setWordKeyType] = useState(WORD_PAIR_KEYS.FOREIGN);
  const [cursor, setCursor] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const isTestStarted = Boolean(cursor);

  const handleRestart = () => {
    setUserAnswers([]);
    setData(shuffleArray(idsTestPlan));
    setCursor(0);
  };

  const handleReverseTest = () => {
    setWordKeyType(getReversedWordKey);
    answerInputRef.current.focus();
  };

  const handleAnswer = (value) => {
    const userAnswerWord = normalizeValue(value);

    if (userAnswerWord) {
      setCursor(inc);
      setUserAnswers(prepend(userAnswerWord));

      setRefValue(answerInputRef, '');
      answerInputRef.current.focus();
    }
  };

  const handleSubmitAnswer = () => {
    handleAnswer(getRefValue(answerInputRef));
  };

  const handleOnKeyDown = (event) => {
    if (isEnterKey(event)) {
      handleAnswer(getTargetValue(event));
    }
  };

  const isTestInProgress = lt(cursor, totalTestPlan);

  const getQuestionWordForeign = compose(
    prop(WORD_PAIR_KEYS.FOREIGN),
    prop(getCurrentEntityId(cursor)(data)),
  );
  const getQuestionWordNative = compose(
    prop(WORD_PAIR_KEYS.NATIVE),
    prop(getCurrentEntityId(cursor)(data)),
  );
  const getTranscription = compose(
    prop(WORD_PAIR_KEYS.TRANSCRIPTION),
    prop(getCurrentEntityId(cursor)(data)),
  );
  const getPartOfSpeech = compose(
    prop(WORD_PAIR_KEYS.PART_OF_SPEECH),
    prop(getCurrentEntityId(cursor)(data)),
  );

  return (
    <>
      <Header
        totalTestPlan={totalTestPlan}
        isTestStarted={isTestStarted}
        wordKeyType={wordKeyType}
        onReverseTest={handleReverseTest}
      />
      <EmptyScreen type={!totalTestPlan && EMPTY_SCREEN_TYPE.TEST}>
        <ScrollContainer>
          <ScreenBody>
            {isTestInProgress && (
              <Box className="p-5 rounded-md bg-catskill-white">
                <Box className="mb-6">
                  <QuestionWord
                    wordKeyType={wordKeyType}
                    questionWordForeign={getQuestionWordForeign(entitiesDictionary)}
                    questionWordNative={getQuestionWordNative(entitiesDictionary)}
                    transcription={getTranscription(entitiesDictionary)}
                    partOfSpeech={getPartOfSpeech(entitiesDictionary)}
                  />
                </Box>
                <Box className="relative">
                  <Input
                    autoFocus
                    className="pr-10"
                    ref={answerInputRef}
                    onKeyDown={handleOnKeyDown}
                  />
                  <Box className="!absolute right-0 top-0">
                    <Button
                      type="button"
                      aria-label="Send answer"
                      size="icon"
                      onClick={handleSubmitAnswer}
                    >
                      <SendHorizontal />
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
            <If condition={!isTestInProgress}>
              <Restart onRestart={handleRestart} />
            </If>
            <If condition={isTestStarted}>
              <>
                <Box className="mt-4 mb-3">
                  <Progress value={getProgress(totalTestPlan, cursor)} />
                  <Box className="mt-2 flex items-center justify-between px-2">
                    <Typography className="block antialiased text-gray-700 text-center text-xs">
                      {t(TEST_SCREEN__PROGRESS_LABEL)}
                    </Typography>
                    <Typography className="block antialiased text-gray-700 text-center text-xs">
                      {cursor}
                      {' '}
                      /
                      {totalTestPlan}
                    </Typography>
                  </Box>
                </Box>
                <Box className="px-6 my-6">
                  <ResultAnswersList
                    wordKeyType={wordKeyType}
                    userAnswers={userAnswers}
                    ids={slice(0, cursor)(data)}
                  />
                </Box>
              </>
            </If>
          </ScreenBody>
        </ScrollContainer>
      </EmptyScreen>
    </>
  );
}

export default TestScreen;
