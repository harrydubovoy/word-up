import { useState } from 'react';
import { inc, lt } from 'ramda';

import { useTestPlan } from '../../../entities';

export const useTestProgress = () => {
  const [cursor, setCursor] = useState(0);
  const { testPlanTotal } = useTestPlan();

  const incrementCursor = () => {
    setCursor(inc);
  };

  const resetCursor = () => {
    setCursor(0);
  };

  const isTestFinished = lt(cursor, testPlanTotal);

  const isTestStarted = Boolean(cursor);

  return {
    cursor,
    incrementCursor,
    resetCursor,
    isTestStarted,
    isTestFinished,
    testPlanTotal,
  };
};
