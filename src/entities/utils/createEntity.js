import { lensProp, set } from 'ramda';

export const createEntity = (id, data) => (entities) => (
  set(lensProp(id), { id, ...data })(entities)
);
