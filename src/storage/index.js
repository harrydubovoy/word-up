const createStorage = (namespace) => () => ({
  set: (key, value) => localStorage.setItem(`${namespace}-${key}`, value),
  get: (key) => localStorage.getItem(`${namespace}-${key}`),
  removeByKey: (key) => localStorage.removeItem(`${namespace}-${key}`),
})

const storage = createStorage('word-up');

export {
  storage,
}
