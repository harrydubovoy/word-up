import { useState } from 'react';
import { prepend } from 'ramda';

export const useUserAnswers = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const resetUserAnswers = () => {
    setUserAnswers([]);
  };

  const addUserAnswer = (userAnswer) => {
    setUserAnswers(prepend(userAnswer));
  };

  return {
    userAnswers,
    resetUserAnswers,
    addUserAnswer,
  };
};
