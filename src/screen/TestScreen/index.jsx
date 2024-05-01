import React, { useState, useRef, useEffect } from 'react';
import {
  compose,
  length,
  append,
  toLower,
  trim,
  nth,
  prop,
  slice,
} from 'ramda';

import Input from '../../ui/Input';
import IconButton from '../../ui/IconButton';
import Progress from '../../ui/Progress';
import Typography from '../../ui/Typography';

import Header from './Header';

import EmptyScreen from '../EmptyScreen';
import ResultAnswersList from './ResultAnswersList';
import Restart from './Restart';
import QuestionWord from './QuestionWord';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';

import SendSvg from '../../icons/SendSvg';

import { useWordPairsDatabase } from '../../database';
import { useTranslation } from '../../translations';
import {
  TEST_SCREEN__ANSWER_INPUT_LABEL,
  TEST_SCREEN__PROGRESS_LABEL,
} from '../../translations/resources/constants';

import {
  getQuestionWordKeyByReverse,
  getProgress,
} from './utils';
import { getTargetValue, isEnterKey } from '../../utils/input';
import { shuffleArray } from '../../utils/list';

const TestScreen = () => {
  const { getAll } = useWordPairsDatabase();
  const { t } = useTranslation();

  const answerInputRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTestRevered, setIsTestReversed] = useState(false);
  const [cursor, setCursor] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const isTestStarted = Boolean(cursor);

  const handleSetData = compose(setData, shuffleArray);

  useEffect(() => {
    getAll()
      .then(handleSetData)
      .finally(() => setIsLoaded(true));
  }, [getAll]); // eslint-disable-line

  const handleRestart = () => {
    setUserAnswers([]);
    handleSetData(data)
    setCursor(0);
  }

  const handleReverseTest = () => {
    if (isTestStarted) {
      return;
    }

    setIsTestReversed((prev) => !prev);
    answerInputRef.current.focus();
  }

  const handleAnswer = (value) => {
    const userAnswerWord = compose(toLower, trim)(value);

    if (userAnswerWord) {
      setCursor((prev) => prev + 1);
      setUserAnswers((prev) => append(userAnswerWord, prev));

      answerInputRef.current.value = '';
      answerInputRef.current.focus();
    }
  }

  const handleSubmitAnswer = () => {
    handleAnswer(prop('value', answerInputRef.current));
  }

  const handleOnKeyDown = (event) => {
    if (isEnterKey(event)) {
      handleAnswer(getTargetValue(event))
    }
  }

  if (!isLoaded) {
    return null;
  }

  if (!length(data)) {
    return (
      <EmptyScreen />
    )
  }

  const questionWordKey = getQuestionWordKeyByReverse(isTestRevered);

  return (
    <>
      <Header
        isTestStarted={isTestStarted}
        isTestRevered={isTestRevered}
        onReverseTest={handleReverseTest}
      />

      <ScrollContainer>
        <ScreenBody>
          {length(data) > cursor ? (
            <div className="p-5 rounded-md bg-[#f8fafc]">
              <div className="mb-6">
                <QuestionWord>
                  {compose(prop(questionWordKey), nth(cursor))(data)}
                </QuestionWord>
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
          ) : (
            <Restart isTestRevered={isTestRevered} onRestart={handleRestart} />
          )}

          {isTestStarted && (
            <>
              <div className="mt-6 mb-3">
                <Progress value={getProgress(data, cursor)} />
                <div className="mt-2 flex items-center justify-between px-2">
                  <Typography color="blue-gray" className="block antialiased text-gray-700 text-center text-xs">
                    {t(TEST_SCREEN__PROGRESS_LABEL)}
                  </Typography>
                  <Typography color="blue-gray" className="block antialiased text-gray-700 text-center text-xs">
                    {cursor} / {length(data)}
                  </Typography>
                </div>
              </div>
              <div className="px-6 my-6">
                <ResultAnswersList
                  isTestRevered={isTestRevered}
                  userAnswers={userAnswers}
                  data={slice(0, cursor)(data)}
                />
              </div>
            </>
          )}
        </ScreenBody>
      </ScrollContainer>
    </>
  );
}

export default TestScreen;
