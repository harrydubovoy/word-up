import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { localStorageMiddleware, reHydrateStore } from './localStorage';

import { rootReducer } from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, localStorageMiddleware),
  // devTools: process.env.NODE_ENV !== 'production',
  preloadedState: reHydrateStore(),
});

export default store;
