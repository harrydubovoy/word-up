import { compose, isEmpty, pluck, reject, uniq, values } from 'ramda';

export const generateId = () => Number(new Date()) + Math.floor(Math.random() * 100);

export const reverseValue = (value) => !value;

export const getUniqueValuesByField = (field) => compose(
  uniq,
  reject(isEmpty),
  pluck(field),
  values,
);
