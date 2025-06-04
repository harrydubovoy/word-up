import { useState } from 'react';

import { getTargetValue } from '../utils/input';

import useDebouncedState from './useDebouncedState';

export const useSearchQuery = () => {
  const [searchString, setSearchString] = useDebouncedState('');
  const [searchControlValue, setSearchControlValue] = useState('');

  const handleOnSearchChange = (event) => {
    setSearchString(getTargetValue(event));
    setSearchControlValue(getTargetValue(event));
  };

  return {
    searchString,
    searchControlValue,
    handleOnSearchChange,
  };
};
