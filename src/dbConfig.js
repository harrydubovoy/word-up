export const WORD_PAIRS_STORE_NAME = 'word-pairs';
export const DICTIONARY_STORE_NAME = 'dictionary';
export const TRASH_BIN_STORE_NAME = 'trash-bin';

const dbConfig = {
  name: 'WordUp',
  version: 2,
  objectStoresMeta: [
    {
      store: WORD_PAIRS_STORE_NAME,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'foreign', keypath: 'foreign', options: { unique: true } },
        { name: 'native', keypath: 'native', options: { unique: false } },
      ],
    },
    {
      store: DICTIONARY_STORE_NAME,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'foreign', keypath: 'foreign', options: { unique: false } },
        { name: 'native', keypath: 'native', options: { unique: false } },
      ],
    },
    {
      store: TRASH_BIN_STORE_NAME,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'foreign', keypath: 'foreign', options: { unique: false } },
        { name: 'native', keypath: 'native', options: { unique: false } },
      ],
    },
  ],
};

export default dbConfig;
