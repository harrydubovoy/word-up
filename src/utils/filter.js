import { compose, filter, or, equals, identity, ifElse, reverse } from 'ramda';

import { includes } from './string';
import { getForeignWordById, getNativeWordById } from './word';
import { wrapByFn } from './function';

import { FILTER_TYPE_MAP, FILTER_SORT_MAP } from '../constants/filter';

const isAllType = equals(FILTER_TYPE_MAP.ALL.value);
const isIncludedType = equals(FILTER_TYPE_MAP.INCLUDED.value);
const isExcludedType = equals(FILTER_TYPE_MAP.EXCLUDED.value);

const filterByIncluded = (includedIds) => filter((id) => !includedIds.includes(id));

export const filterByType = (type, { includedIds }) => compose(
  ifElse(wrapByFn(isAllType(type)), identity, identity),
  ifElse(wrapByFn(isIncludedType(type)), wrapByFn(includedIds), identity),
  ifElse(wrapByFn(isExcludedType(type)), filterByIncluded(includedIds), identity),
);

export const filterBySearchString = (searchString, { entities }) => (
  ifElse(
    wrapByFn(searchString),
    filter((wordId) => (
      or(
        compose(includes(searchString), getNativeWordById(wordId))(entities),
        compose(includes(searchString), getForeignWordById(wordId))(entities),
      )
    )),
    identity,
  ));

const isOldest = equals(FILTER_SORT_MAP.OLDEST.value);

export const filterBySort = (type) => compose(
  ifElse(wrapByFn(isOldest(type)), identity, reverse),
);
