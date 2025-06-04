import { assoc, mergeRight } from 'ramda';

export const updateEntity = (id, data) => (entities) => (
  assoc(id, mergeRight(entities[id] || {}, data), entities)
);
