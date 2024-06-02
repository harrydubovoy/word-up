import { useState, useRef } from 'react';
import {
  compose,
  append,
  slice,
  lt,
  prop,
} from 'ramda';

import Input from '../../ui/Input';
import IconButton from '../../ui/IconButton';
import { Progress } from '../../ui/Progress';
import { Typography } from '../../ui/Typography';

import Header from './Header';

import ResultAnswersList from './ResultAnswersList';
import Restart from './Restart';
import QuestionWord from './QuestionWord';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';
import If from '../../util-components/If';
import EmptyScreen from '../EmptyScreen';

import SendSvg from '../../icons/SendSvg';

import { useTranslation } from '../../translations';
import {
  TEST_SCREEN__ANSWER_INPUT_LABEL,
  TEST_SCREEN__PROGRESS_LABEL,
} from '../../translations/resources/constants';

import { useAppSelector } from '../../store/hooks';
import { selectIdsTestPlan, selectTotalTestPlan } from '../../store/reducer/test-plan.slice';
import { selectEntitiesDictionary } from '../../store/reducer/dictionary.slice';

import { getProgress, getCurrentEntityId } from './utils';
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

  const [isTestReversed, setIsTestReversed] = useState(false);
  const [cursor, setCursor] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const isTestStarted = Boolean(cursor);

  const handleRestart = () => {
    setUserAnswers([]);
    setData(shuffleArray(idsTestPlan));
    setCursor(0);
  };

  const handleReverseTest = () => {
    setIsTestReversed((prev) => !prev);
    answerInputRef.current.focus();
  };

  const handleAnswer = (value) => {
    const userAnswerWord = normalizeValue(value);

    if (userAnswerWord) {
      setCursor((prev) => prev + 1);
      setUserAnswers((prev) => append(userAnswerWord, prev));

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
        isTestReversed={isTestReversed}
        onReverseTest={handleReverseTest}
      />
      <EmptyScreen type={!totalTestPlan && EMPTY_SCREEN_TYPE.TEST}>
        <ScrollContainer>
          <ScreenBody>
            {isTestInProgress && (
              <div className="p-5 rounded-md bg-catskill-white">
                <div className="mb-6">
                  <QuestionWord
                    isTestReversed={isTestReversed}
                    questionWordForeign={getQuestionWordForeign(entitiesDictionary)}
                    questionWordNative={getQuestionWordNative(entitiesDictionary)}
                    transcription={getTranscription(entitiesDictionary)}
                    partOfSpeech={getPartOfSpeech(entitiesDictionary)}
                  />
                </div>

                <div className="flex gap-2">
                  <Input
                    autoFocus
                    label={t(TEST_SCREEN__ANSWER_INPUT_LABEL)}
                    size="md"
                    inputRef={answerInputRef}
                    onKeyDown={handleOnKeyDown}
                  />
                  <IconButton
                    aria-label="Send answer"
                    className="shrink-0"
                    size="md"
                    onClick={handleSubmitAnswer}
                  >
                    <SendSvg />
                  </IconButton>
                </div>
              </div>
            )}
            <If condition={!isTestInProgress}>
              <Restart isTestReversed={isTestReversed} onRestart={handleRestart} />
            </If>
            <If condition={isTestStarted}>
              <>
                <div className="mt-6 mb-3">
                  <Progress value={getProgress(totalTestPlan, cursor)} />
                  <div className="mt-2 flex items-center justify-between px-2">
                    <Typography color="blue-gray" className="block antialiased text-gray-700 text-center text-xs">
                      {t(TEST_SCREEN__PROGRESS_LABEL)}
                    </Typography>
                    <Typography color="blue-gray" className="block antialiased text-gray-700 text-center text-xs">
                      {cursor}
                      {' '}
                      /
                      {totalTestPlan}
                    </Typography>
                  </div>
                </div>
                <div className="px-6 my-6">
                  <ResultAnswersList
                    isTestReversed={isTestReversed}
                    userAnswers={userAnswers}
                    ids={slice(0, cursor)(data)}
                  />
                </div>
              </>
            </If>
          </ScreenBody>
        </ScrollContainer>
      </EmptyScreen>
    </>
  );
}

export default TestScreen;
