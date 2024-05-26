import { useState } from 'react';

import useDebounce from './useDebounce';
import { getTargetValue } from '../utils/input';

const useSearchQuery = () => {
  const [searchString, setSearchString] = useState('');
  const debouncedSearchString = useDebounce(searchString);

  const handleOnSearchChange = (event) => {
    setSearchString(getTargetValue(event));
  }

  return {
    searchString: debouncedSearchString,
    handleOnSearchChange,
  }
}

export default useSearchQuery;
