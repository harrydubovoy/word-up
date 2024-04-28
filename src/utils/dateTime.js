import { storage } from '../storage';

const STORAGE_KEY = 'last-time-test-using';

export const getDateTime = () => {
  const date = new Date();
  return `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()}`;
}

export const setTestDoneDateTime = (date) => storage().set(STORAGE_KEY, date);

export const getTestDoneDateTime = () => storage().get(STORAGE_KEY)
