import { useState } from 'react';
import { prop, compose } from 'ramda';

import { storage } from '../storage';

import { FILTER_TYPE_MAP, STORAGE_FILTER_TYPE_KEY } from '../constants/filter';

const getFilterTypeFromStorage = () => {
  const storageFilterType = storage().get(STORAGE_FILTER_TYPE_KEY);

  return storageFilterType || compose(prop('value'), prop('ALL'))(FILTER_TYPE_MAP);
};

const setFilterTypeToStorage = (filterType) => {
  storage().set(STORAGE_FILTER_TYPE_KEY, filterType);
};

const useFilterType = () => {
  const [filterValue, setFilterValue] = useState(getFilterTypeFromStorage);
  const [filterDisplayValue, setFilterDisplayValue] = useState(() => (
    compose(prop('displayValue'), prop(getFilterTypeFromStorage()))(FILTER_TYPE_MAP)
  ));

  const handleFilterTypeChange = (type) => {
    setFilterValue(type);
    setFilterDisplayValue(compose(prop('displayValue'), prop(type))(FILTER_TYPE_MAP));
    setFilterTypeToStorage(type);
  };

  return {
    filterValue,
    filterDisplayValue,
    handleFilterTypeChange,
  };
};

export default useFilterType;
