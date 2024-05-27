import { compose, filter, or, equals } from 'ramda';

import { FILTER_MAP } from '../constants/filter';
import { includes } from './string';
import { getForeignWordById, getNativeWordById } from './word';

const isAllType = (type) => (ids) => equals(type, FILTER_MAP.ALL.value) ? ids : ids;

const isIncludedType = (type, { includedIds }) => (ids) => (
  equals(type, FILTER_MAP.INCLUDED.value) ? includedIds : ids
);

const isExcludedType = (type, { includedIds }) => (ids) => (
  equals(type, FILTER_MAP.EXCLUDED.value) ? filter((id) => !includedIds.includes(id), ids) : ids
)

export const filterByType = (type, { includedIds }) => compose(
  isAllType(type),
  isIncludedType(type, { includedIds }),
  isExcludedType(type, { includedIds }),
)

export const filterBySearchString = (searchString, { entities }) => (ids) => {
  if (!searchString) {
    return ids;
  }

  return filter((wordId) => (
    or(
      compose(includes(searchString), getNativeWordById(wordId))(entities),
      compose(includes(searchString), getForeignWordById(wordId))(entities)
    )
  ), ids);
}
