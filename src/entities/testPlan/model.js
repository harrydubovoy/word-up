import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';
import { compose, length } from 'ramda';

import {
  createEntity,
  removeEntity,
  addId,
  removeId,
  createSelectors,
  getStorageStateName,
} from '../utils';

export const useTestPlanStore = compose(createSelectors, create, persist)(
  (storeSet) => ({
    entities: {},
    ids: [],
    createOne: ({ id }) => storeSet((state) => ({
      entities: createEntity(id, { id })(state.entities),
      ids: addId(id)(state.ids),
    })),
    removeOne: ({ id }) => storeSet((state) => ({
      entities: removeEntity(id)(state.entities),
      ids: removeId(id)(state.ids),
    })),
  }),
  {
    name: getStorageStateName('test-plan'),
    getStorage: () => localStorage,
  },
);

export const useTestPlan = () => {
  const testPlanEntities = useTestPlanStore.use.entities();
  const testPlanIds = useTestPlanStore.use.ids();

  const createOne = useTestPlanStore.use.createOne();
  const removeOneById = useTestPlanStore.use.removeOne();

  const selectEntityById = (id) => testPlanEntities[id];

  return {
    testPlanIds,

    testPlanTotal: length(testPlanIds),

    selectEntityById,

    createOne,
    removeOneById,
  };
};
