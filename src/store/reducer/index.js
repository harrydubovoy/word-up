import { combineSlices } from '@reduxjs/toolkit';
import { testPlanSlice } from './test-plan.slice';
import { dictionarySlice } from './dictionary.slice';
import { archiveSlice } from './archive.slice';

export const rootReducer = combineSlices(
  testPlanSlice,
  dictionarySlice,
  archiveSlice,
);
