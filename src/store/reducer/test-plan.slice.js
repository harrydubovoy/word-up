import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const testPlanAdapter = createEntityAdapter();

export const testPlanSlice = createSlice({
  name: 'testPlan',
  initialState: testPlanAdapter.getInitialState(),
  reducers: {
    addOne: testPlanAdapter.addOne,
    removeOne: testPlanAdapter.removeOne,
  },
});

export const {
  selectIds: selectIdsTestPlan,
  selectEntities: selectEntitiesTestPlan,
  selectTotal: selectTotalTestPlan,
} = testPlanAdapter.getSelectors((state) => state.testPlan);

export const {
  addOne: addOneTestPlan,
  removeOne: removeOneTestPlan,
} = testPlanSlice.actions;
