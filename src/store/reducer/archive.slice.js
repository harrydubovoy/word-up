import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const archiveAdapter = createEntityAdapter();

export const archiveSlice = createSlice({
  name: 'archive',
  initialState: archiveAdapter.getInitialState(),
  reducers: {
    addOne: archiveAdapter.addOne,
    removeOne: archiveAdapter.removeOne,
    updateOne: archiveAdapter.updateOne,
  },
});

export const {
  selectIds: selectIdsArchive,
  selectEntities: selectEntitiesArchive,
  selectTotal: selectTotalArchive,
} = archiveAdapter.getSelectors((state) => state.archive);

export const {
  addOne: addOneArchive,
  removeOne: removeOneArchive,
} = archiveSlice.actions;
