import MuiBox from '@mui/material/Box';

import { Input } from '../../ui-kit/Input';

import { QuestionWord } from '../../ui/QuestionWord';
import { TestProgress } from '../../ui/TestProgress';
import { ResultAnswersList } from '../../ui/ResultAnswer';

import { Branch } from '../../shared/utils/Branch';
import { If } from '../../shared/utils/If';
import { isEnterKey } from '../../shared/utils/input';

import { Restart } from './Restart';

import { useCurrentQuestionWord } from './hooks/useCurrentQuestionWord';
import { useTestQuestions } from './hooks/useTestQuestions';
import { useTestProgress } from './hooks/useTestProgress';
import { useUserAnswers } from './hooks/useUserAnswers';
import { useAnswersList } from './hooks/useAnswersList';
import { useTestType } from './hooks/useTestType';
import { useAnswerInput } from './hooks/useAnswerInput';

export function TestPage() {
  const { data, resetTestQuestions } = useTestQuestions();

  const {
    cursor,
    testPlanTotal,
    incrementCursor,
    resetCursor,
    isTestFinished,
    isTestStarted,
  } = useTestProgress();

  const { reverseTestType, wordKeyType } = useTestType();

  const { userAnswers, resetUserAnswers, addUserAnswer } = useUserAnswers();

  const { answersList } = useAnswersList({ wordKeyType, data, cursor, userAnswers });

  const {
    answerInputRef,
    focusInput,
    resetInputValue,
    getInputValue,
  } = useAnswerInput();

  const {
    isTestReversed,
    questionWord,
    transcription,
    partOfSpeech,
  } = useCurrentQuestionWord({ cursor, data, wordKeyType });

  const handleRestart = () => {
    resetUserAnswers();
    resetTestQuestions();
    resetCursor();
  };

  const handleReverseTest = () => {
    if (isTestStarted) {
      return;
    }

    reverseTestType();
    focusInput();
  };

  const handleAnswer = (value) => {
    if (value) {
      incrementCursor();
      addUserAnswer(value);
      resetInputValue();
    }
  };

  const handleOnSubmit = (event) => {
    handleAnswer(getInputValue(event));
  };

  const handleOnKeyDown = (event) => {
    if (isEnterKey(event)) {
      handleAnswer(getInputValue(event));
    }
  };

  return (
    <MuiBox sx={{ maxWidth: '90%', margin: '0 auto', padding: '8px 0' }}>
      <MuiBox sx={{ padding: '0 0 16px' }}>
        <Branch
          condition={isTestFinished}
          slotIf={(
            <MuiBox sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <QuestionWord
                isTestReversed={isTestReversed}
                isTestStarted={isTestStarted}
                questionWord={questionWord}
                transcription={transcription}
                partOfSpeech={partOfSpeech}
                onReverseTest={handleReverseTest}
              />
              <MuiBox>
                <Input
                  autoFocus
                  type="text"
                  label="Answer"
                  onKeyDown={handleOnKeyDown}
                  ref={answerInputRef}
                />
              </MuiBox>
            </MuiBox>
          )}
          slotElse={(
            <Restart onRestart={handleRestart} />
          )}
        />
      </MuiBox>
      <If condition={isTestStarted}>
        <MuiBox>
          <TestProgress cursor={cursor} totalTestPlan={testPlanTotal} />
          <MuiBox sx={{ marginTop: '16px' }}>
            <ResultAnswersList answersList={answersList} />
          </MuiBox>
        </MuiBox>
      </If>
    </MuiBox>
  );
}
