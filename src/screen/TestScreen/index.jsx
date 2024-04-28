import React, { useState, useRef, useEffect } from "react";
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
import Hr from "../../ui/Hr";

import FlagIcon, { FLAG_ICON_TYPE } from "../../components/FlagIcon";

import ScreenContainer from "../../screen-components/ScreenContainer";
import ScreenHeader from "../../screen-components/ScreenHeader";

import EmptyScreen from '../EmptyScreen';
import ResultAnswersList from './ResultAnswersList';
import Restart from './Restart';
import QuestionWord from './QuestionWord';

import SendSvg from "../../icons/SendSvg";

import { useWordPairsDatabase } from '../../database';
import { useTranslation } from '../../translations';
import {
  TEST_SCREEN__TITLE,
  TEST_SCREEN__DESCRIPTION,
  TEST_SCREEN__ANSWER_INPUT_LABEL,
  TEST_SCREEN__PROGRESS_LABEL,
} from '../../translations/resources/constants';

import {
  getQuestionWordKeyByReverse,
  getProgress,
} from './utils';
import { getTargetValue, isEnterKey } from '../../utils/input';
import { shuffleArray } from '../../utils/list';
import { getTestDoneDateTime } from '../../utils/dateTime';

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
      <ScreenContainer>
        <ScreenHeader
          title={t(TEST_SCREEN__TITLE)}
          description={t(TEST_SCREEN__DESCRIPTION)}
        />
        <EmptyScreen />
      </ScreenContainer>
    )
  }

  const questionWordKey = getQuestionWordKeyByReverse(isTestRevered);
  const testDoneDateTime = getTestDoneDateTime();

  return (
    <ScreenContainer>
      <div className="mb-3">
        <div className="flex justify-between gap-2">
          <div>
            <Typography variant="h5">{t(TEST_SCREEN__TITLE)}</Typography>
            {testDoneDateTime && (
              <Typography variant="small">
                {t(TEST_SCREEN__DESCRIPTION)}
                <span className="font-semibold text-gray-600">{testDoneDateTime}</span>
              </Typography>
            )}
          </div>
          <div className="mb-3 flex gap-2">
            <IconButton
              variant="text"
              disabled={isTestStarted}
              onClick={handleReverseTest}
            >
              <FlagIcon type={isTestRevered ? FLAG_ICON_TYPE.UA : FLAG_ICON_TYPE.ENG} />
            </IconButton>
          </div>
        </div>
        <div className="my-3">
          <Hr />
        </div>
      </div>

      {length(data) > cursor ? (
        <div className="p-5 rounded-md bg-[#f8fafc]">
          <div className="mb-6">
            <QuestionWord cursor={cursor}>
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
        <div className="text-center">
          <Restart isTestRevered={isTestRevered} onRestart={handleRestart} />
        </div>
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
    </ScreenContainer>
  );
}

export default TestScreen;
