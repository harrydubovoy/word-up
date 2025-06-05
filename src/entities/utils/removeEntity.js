import { omit } from 'ramda';

export const removeEntity = (id) => (entities) => omit([id])(entities);
