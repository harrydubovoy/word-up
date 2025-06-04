import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { TextField } from '../../ui-kit/TextField';
import { ButtonIcon } from '../../ui-kit/Button';
import { Box } from '../../ui-kit/Box';

import { Branch } from '../../shared/utils/Branch';
import { If } from '../../shared/utils/If';
import { isEnterKey } from '../../shared/utils/input';

import { QuestionWord } from '../../ui/QuestionWord';
import { TestProgress } from '../../ui/TestProgress';

import { Restart } from './Restart';

import { ResultAnswersList } from '../../ui/ResultAnswer';

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
    <Box sx={{ maxWidth: '75%', margin: '0 auto', padding: '8px 0' }}>
      <Box sx={{ padding: '0 0 16px' }}>
        <Branch
          condition={isTestFinished}
          slotIf={(
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <QuestionWord
                isTestReversed={isTestReversed}
                isTestStarted={isTestStarted}
                questionWord={questionWord}
                transcription={transcription}
                partOfSpeech={partOfSpeech}
                onReverseTest={handleReverseTest}
              />
              <TextField
                variant="outlined"
                autoFocus
                className="pr-10"
                ref={answerInputRef}
                onKeyDown={handleOnKeyDown}
                endAdornment={(
                  <ButtonIcon
                    aria-label="Send answer"
                    size="icon"
                    onClick={handleOnSubmit}
                  >
                    <SendOutlinedIcon />
                  </ButtonIcon>
                )}
              />
            </Box>
          )}
          slotElse={(
            <Restart onRestart={handleRestart} />
          )}
        />
      </Box>
      <If condition={isTestStarted}>
        <Box>
          <TestProgress cursor={cursor} totalTestPlan={testPlanTotal} />
          <Box sx={{ marginTop: '16px' }}>
            <ResultAnswersList answersList={answersList} />
          </Box>
        </Box>
      </If>
    </Box>
  );
}
