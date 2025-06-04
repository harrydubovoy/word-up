import { STORAGE_APP_NAME } from '../constants/storage';

const createStorage = (namespace) => () => ({
  set: (key, value) => localStorage.setItem(`${namespace}-${key}`, value),
  get: (key) => localStorage.getItem(`${namespace}-${key}`),
  removeByKey: (key) => localStorage.removeItem(`${namespace}-${key}`),
  getMemorySize: (key) => Math.floor(3 + ((localStorage.getItem(`${namespace}-${key}`).length * 16) / (8 * 1024))),
});

export const storage = createStorage(STORAGE_APP_NAME);
