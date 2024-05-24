import { compose, toLower, trim } from 'ramda';

export const generateId = () => Number(new Date()) + Math.floor(Math.random() * 100);
export const normalizeValue = compose(trim, toLower);
