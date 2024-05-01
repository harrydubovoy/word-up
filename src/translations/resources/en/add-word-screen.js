import {
  ADD_WORD_SCREEN__ACTION_ADD_TO_LIST,
  ADD_WORD_SCREEN__ACTION_ADD_TO_TEST_PLAN,
  ADD_WORD_SCREEN__DESCRIPTION,
  ADD_WORD_SCREEN__TITLE, ADD_WORD_SCREEN__WORD_ADDED_NOTIFICATION_ERROR,
  ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS,
  ADD_WORD_SCREEN__WORD_ADDED_TO_TEST_PLAN_NOTIFICATION_SUCCESS
} from '../constants';

const translations = {
  [ADD_WORD_SCREEN__TITLE]: 'Add word',
  [ADD_WORD_SCREEN__DESCRIPTION]: 'Add new word to your testing list',
  [ADD_WORD_SCREEN__ACTION_ADD_TO_TEST_PLAN]: 'To Test',
  [ADD_WORD_SCREEN__ACTION_ADD_TO_LIST]: 'To Dictionary',
  [ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS]: 'Word was added to dictionary',
  [ADD_WORD_SCREEN__WORD_ADDED_TO_TEST_PLAN_NOTIFICATION_SUCCESS]: 'Word was added to test plan',
  [ADD_WORD_SCREEN__WORD_ADDED_NOTIFICATION_ERROR]: 'Something went wrong',
}

export default translations;