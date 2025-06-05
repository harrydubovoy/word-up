import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';
import { compose } from 'ramda';

import {
  createEntity,
  removeEntity,
  addId,
  removeId,
  createSelectors,
  getStorageStateName,
} from '../utils';

export const useArchiveStore = compose(createSelectors, create, persist)(
  (storeSet) => ({
    entities: {},
    ids: [],
    createOne: ({ id, data }) => storeSet((state) => ({
      entities: createEntity(id, data)(state.entities),
      ids: addId(id)(state.ids),
    })),
    removeOne: ({ id }) => storeSet((state) => ({
      entities: removeEntity(id)(state.entities),
      ids: removeId(id)(state.ids),
    })),
  }),
  {
    name: getStorageStateName('archive'),
    getStorage: () => localStorage,
  },
);

export const useArchive = () => {
  const archiveEntity = useArchiveStore.use.entities();
  const archiveIds = useArchiveStore.use.ids();

  const selectEntityById = (id) => archiveEntity[id];

  const selectForeignById = (id) => selectEntityById(id).foreign;
  const selectNativeById = (id) => selectEntityById(id).native;
  const selectDescriptionById = (id) => selectEntityById(id).description;
  const selectPartOfSpeechById = (id) => selectEntityById(id).partOfSpeech;
  const selectTranscription = (id) => selectEntityById(id).transcription;

  const createOne = useArchiveStore.use.createOne();
  const removeOneById = useArchiveStore.use.removeOne();

  return {
    archiveIds,

    selectEntityById,

    selectForeignById,
    selectNativeById,
    selectDescriptionById,
    selectPartOfSpeechById,
    selectTranscription,

    createOne,
    removeOneById,
  };
};
