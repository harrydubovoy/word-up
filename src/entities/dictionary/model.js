import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';
import { compose } from 'ramda';

import { DICTIONARY_ENTITY_ID_POSTFIX } from '../../shared/constants/ids';
import { generateId } from '../../shared/utils/generateId';

import {
  createEntity,
  updateEntity,
  removeEntity,
  addId,
  removeId,
  createSelectors,
  getStorageStateName,
} from '../utils';

// export const selectEntityById = (id, propName) => (state) => state.entities[id]?.[propName];

export const useDictionaryStore = compose(createSelectors, create, persist)(
  (storeSet) => ({
    entities: {},
    ids: [],
    createOne: ({ data }) => storeSet((state) => {
      const id = data?.id ?? generateId(DICTIONARY_ENTITY_ID_POSTFIX);

      return {
        entities: createEntity(id, data)(state.entities),
        ids: addId(id)(state.ids),
      };
    }),
    removeOne: ({ id }) => storeSet((state) => ({
      entities: removeEntity(id)(state.entities),
      ids: removeId(id)(state.ids),
    })),
    updateOne: ({ id, data }) => storeSet((state) => ({
      ...state,
      entities: updateEntity(id, data)(state.entities),
    })),
  }),
  {
    name: getStorageStateName('dictionary'),
    getStorage: () => localStorage,
  },
);

export const useDictionary = () => {
  const dictionaryEntities = useDictionaryStore.use.entities();
  const dictionaryIds = useDictionaryStore.use.ids();

  const createOne = useDictionaryStore.use.createOne();
  const updateOneById = useDictionaryStore.use.updateOne();
  const removeOneById = useDictionaryStore.use.removeOne();

  const selectEntityById = (id) => dictionaryEntities[id];

  const selectForeignById = (id) => selectEntityById(id).foreign;
  const selectNativeById = (id) => selectEntityById(id).native;
  const selectDescriptionById = (id) => selectEntityById(id).description;
  const selectPartOfSpeechById = (id) => selectEntityById(id).partOfSpeech;
  const selectTranscription = (id) => selectEntityById(id).transcription;

  return {
    dictionaryIds,
    dictionaryEntities,

    selectEntityById,

    selectForeignById,
    selectNativeById,
    selectDescriptionById,
    selectPartOfSpeechById,
    selectTranscription,

    createOne,
    updateOneById,
    removeOneById,
  };
};
