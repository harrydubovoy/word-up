import { useState } from 'react';
import { prop, compose } from 'ramda';

import { FILTER_SORT_MAP } from '../constants/filter';

const useFilterSort = () => {
  const [filterSortValue, setFilterSortValue] = useState(FILTER_SORT_MAP.LATEST.value);
  const [
    filterSortDisplayValue,
    setFilterSortDisplayValue,
  ] = useState(FILTER_SORT_MAP.LATEST.displayValue);

  const handleFilterSortChange = (type) => {
    setFilterSortValue(type);
    setFilterSortDisplayValue(compose(prop('displayValue'), prop(type))(FILTER_SORT_MAP));
  };

  return {
    filterSortValue,
    filterSortDisplayValue,
    handleFilterSortChange,
  };
};

export default useFilterSort;
