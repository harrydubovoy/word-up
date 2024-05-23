import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { generateId } from '../../utils/data';

const dictionaryAdapter = createEntityAdapter();

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: dictionaryAdapter.getInitialState(),
  reducers: {
    addOne: dictionaryAdapter.addOne,
    removeOne: dictionaryAdapter.removeOne,
    updateOne: dictionaryAdapter.updateOne,
  },
});

export const {
  selectIds: selectIdsDictionary,
  selectEntities: selectEntitiesDictionary,
  selectTotal: selectTotalDictionary,
  selectById: selectByIdDictionary,
} = dictionaryAdapter.getSelectors((state) => state.dictionary);

export const {
  addOne: addOneDictionary,
  removeOne: removeOneDictionary,
  updateOne: updateOneDictionary,
} = dictionarySlice.actions;

export const dictionaryPayload = ({ foreign, native }) => ({
  id: generateId(),
  foreign,
  native,
})
