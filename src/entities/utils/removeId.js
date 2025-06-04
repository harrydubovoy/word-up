import { filter } from 'ramda';

export const removeId = (id) => (ids) => filter((_id) => _id !== id)(ids);
