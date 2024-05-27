import { combineSlices } from '@reduxjs/toolkit';
import { testPlanSlice } from './test-plan.slice';
import { dictionarySlice } from './dictionary.slice';
import { trashBinSlice } from './trash-bin.slice';

export const rootReducer = combineSlices(
  testPlanSlice,
  dictionarySlice,
  trashBinSlice,
);
