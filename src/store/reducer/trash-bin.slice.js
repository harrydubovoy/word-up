import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const trashBinAdapter = createEntityAdapter();

export const trashBinSlice = createSlice({
  name: 'trashBin',
  initialState: trashBinAdapter.getInitialState(),
  reducers: {
    addOne: trashBinAdapter.addOne,
    removeOne: trashBinAdapter.removeOne,
    updateOne: trashBinAdapter.updateOne,
  },
});

export const {
  selectIds: selectIdsTrashBin,
  selectEntities: selectEntitiesTrashBin,
  selectTotal: selectTotalTrashBin,
} = trashBinAdapter.getSelectors((state) => state.trashBin);

export const {
  addOne: addOneTrashBin,
  removeOne: removeOneTrashBin,
} = trashBinSlice.actions;
