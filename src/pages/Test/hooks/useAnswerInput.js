import { useRef } from 'react';

import { getRefValue, setRefValue } from '../../../shared/utils/input';
import { normalizeValue } from '../../../shared/utils/string';

export const useAnswerInput = () => {
  const answerInputRef = useRef(null);

  const focusInput = () => {
    answerInputRef.current.focus();
  };

  const resetInputValue = () => {
    setRefValue(answerInputRef, '');
    focusInput();
  };

  const getInputValue = () => normalizeValue(getRefValue(answerInputRef));

  return {
    answerInputRef,
    focusInput,
    resetInputValue,
    getInputValue,
  };
};
