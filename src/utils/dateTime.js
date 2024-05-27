import { storage } from '../storage';

const STORAGE_KEY = 'last-time-test-using';

export const getDate = () => new Date();

export const getYear = (date = getDate()) => date.getFullYear();
export const getMonth = (date = getDate()) => (date.getMonth()) + 1;
export const getDay = (date = getDate()) => date.getDate();

export const getDateTime = (date = getDate()) => `${getYear(date)}/${getMonth(date)}/${getDay(date)}`;

export const setTestDoneDateTime = (date) => storage().set(STORAGE_KEY, date);

export const getTestDoneDateTime = () => storage().get(STORAGE_KEY);

export const ensureTestDoneDateTime = () => getTestDoneDateTime() ?? 'It will be first time';
