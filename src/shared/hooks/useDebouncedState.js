import { useState } from 'react';

import useDebounce from './useDebounce';

const useDebouncedState = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const debouncedState = useDebounce(state);

  return [debouncedState, setState];
};

export default useDebouncedState;
