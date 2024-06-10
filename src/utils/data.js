import { compose, pluck, reject, uniq, values, either, isNil, isEmpty } from 'ramda';

export const generateId = () => Number(new Date()) + Math.floor(Math.random() * 100);

export const reverseValue = (value) => !value;

export const getUniqueValuesByField = (field) => compose(
  uniq,
  reject(either(isEmpty, isNil)),
  pluck(field),
  values,
);
