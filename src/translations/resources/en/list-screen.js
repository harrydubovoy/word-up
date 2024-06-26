import {
  LIST_SCREEN__ADD_TO_TEST_PLAN_NOTIFICATION_SUCCESS,
  LIST_SCREEN__DICTIONARY_DESCRIPTION,
  LIST_SCREEN__EMPTY_DICTIONARY,
  LIST_SCREEN__EMPTY_TEST_PLAN,
  LIST_SCREEN__REMOVE_WORD_NOTIFICATION_SUCCESS,
  LIST_SCREEN__TEST_PLAN_DESCRIPTION,
  LIST_SCREEN__TITLE,
} from '../constants';

const translations = {
  [LIST_SCREEN__TITLE]: 'Dictionary',
  [LIST_SCREEN__TEST_PLAN_DESCRIPTION]: 'You have {{totalTestPlan}}/{{totalDictionary}} words at test plan',
  [LIST_SCREEN__DICTIONARY_DESCRIPTION]: 'Dictionary',
  [LIST_SCREEN__EMPTY_DICTIONARY]: 'Your dictionary is empty',
  [LIST_SCREEN__EMPTY_TEST_PLAN]: 'Your test plan is empty',
  [LIST_SCREEN__REMOVE_WORD_NOTIFICATION_SUCCESS]: 'Word was moved to trash',
  [LIST_SCREEN__ADD_TO_TEST_PLAN_NOTIFICATION_SUCCESS]: 'Word was moved to test plan',
};

export default translations;
