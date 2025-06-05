import { useState } from 'react';

import { WORD_PAIR_KEYS } from '../../../shared/constants/word';
import { getReversedWordKey } from '../utils';

export const useTestType = () => {
  const [wordKeyType, setWordKeyType] = useState(WORD_PAIR_KEYS.FOREIGN);

  const reverseTestType = () => {
    setWordKeyType(getReversedWordKey);
  };

  return {
    reverseTestType,
    wordKeyType,
  };
};
