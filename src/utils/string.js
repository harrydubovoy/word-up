import { compose, toLower, trim } from 'ramda';

export const normalizeValue = compose(trim, toLower);
export const includes = (searchStr) => (str) => str.includes(searchStr);
