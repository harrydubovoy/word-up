import { useState } from 'react';

import { useTestPlan } from '../../../entities';
import { shuffleArray } from '../../../shared/utils/array';

export const useTestQuestions = () => {
  const { testPlanIds } = useTestPlan();

  const [data, setData] = useState(() => shuffleArray(testPlanIds));

  const resetTestQuestions = () => {
    setData(shuffleArray(testPlanIds));
  };

  return {
    data,
    resetTestQuestions,
  };
};
