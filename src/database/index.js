import { useRef } from "react";
import { useIndexedDB } from "react-indexed-db-hook";

import { WORD_PAIRS_STORE_NAME, DICTIONARY_STORE_NAME, TRASH_BIN_STORE_NAME } from '../dbConfig';

const databaseHookFactory = (databaseName) => () => {
  const methods = useRef({});
  const { getAll, add, deleteRecord } = useIndexedDB(databaseName);

  methods.current = {
    getAll,
    add,
    removeById: deleteRecord,
  }

  return methods.current;
}

export const useWordPairsDatabase = databaseHookFactory(WORD_PAIRS_STORE_NAME);
export const useDictionaryDatabase = databaseHookFactory(DICTIONARY_STORE_NAME);
export const useTrashBinDatabase = databaseHookFactory(TRASH_BIN_STORE_NAME);
