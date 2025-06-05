import { concat } from 'ramda';

export const addId = (id) => (ids) => concat([id])(ids);
