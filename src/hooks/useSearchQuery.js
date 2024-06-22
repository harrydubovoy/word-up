import useDebouncedState from './useDebouncedState';
import { getTargetValue } from '../utils/input';

const useSearchQuery = () => {
  const [searchString, setSearchString] = useDebouncedState('');

  const handleOnSearchChange = (event) => {
    setSearchString(getTargetValue(event));
  };

  return {
    searchString,
    handleOnSearchChange,
  };
};

export default useSearchQuery;
