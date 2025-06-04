import { compose, pluck, reject, uniq, values, either, isNil, isEmpty } from 'ramda';
import { v4 as uuidv4 } from 'uuid';

export const generateId = () => `${uuidv4()}-847a`;

export const reverseValue = (value) => !value;

export const getUniqueValuesByField = (field) => compose(
  uniq,
  reject(either(isEmpty, isNil)),
  pluck(field),
  values,
);
