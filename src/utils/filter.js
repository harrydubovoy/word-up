import { compose, filter, or, equals, identity, ifElse } from 'ramda';

import { includes } from './string';
import { getForeignWordById, getNativeWordById } from './word';
import { wrapByFn } from './function';

import { FILTER_MAP } from '../constants/filter';

const isAllType = equals(FILTER_MAP.ALL.value);
const isIncludedType = equals(FILTER_MAP.INCLUDED.value);
const isExcludedType = equals(FILTER_MAP.EXCLUDED.value);

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
