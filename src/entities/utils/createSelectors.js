export const createSelectors = (_store) => {
  const store = _store;
  store.use = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const k of Object.keys(store.getState())) {
    (store.use)[k] = () => store((s) => s[k]);
  }

  return store;
};
