import { compose, toUpper, join } from 'ramda';

const getUid7 = () => Math.random().toString(36).substr(6);
export const generateId = (postfix) => compose(toUpper, join('-'))([getUid7(), getUid7(), getUid7(), postfix]);
