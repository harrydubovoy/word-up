import { storage } from '../../storage'

export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);

    storage().set('store', JSON.stringify(getState()));

    return result;
  };
};

export const reHydrateStore = () => {
  if (storage().get('store') !== null) {
    return JSON.parse(storage().get('store'));
  }
};
