import React, { useRef, useEffect } from 'react';
import { toLower } from 'ramda'

import Button from '../../ui/Button';
import Input from '../../ui/Input';

import { useTranslation } from '../../translations';
import {
  COMMON__FOREIGN,
  COMMON__NATIVE,
  ADD_WORD_SCREEN__TITLE,
  ADD_WORD_SCREEN__DESCRIPTION,
  ADD_WORD_SCREEN__ACTION_ADD_TO_TEST_PLAN,
  ADD_WORD_SCREEN__ACTION_ADD_TO_LIST,
  ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS,
  ADD_WORD_SCREEN__WORD_ADDED_TO_TEST_PLAN_NOTIFICATION_SUCCESS,
  ADD_WORD_SCREEN__WORD_ADDED_NOTIFICATION_ERROR,
} from '../../translations/resources/constants';
import { useWordPairsDatabase, useDictionaryDatabase} from '../../database';

import DictionarySvg from '../../icons/DictionarySvg';
import ChecklistSvg from '../../icons/ChecklistSvg';

import ScreenContainer from '../../screen-components/ScreenContainer';
import ScreenHeader from '../../screen-components/ScreenHeader';

import { useAlertContext } from '../../components/Alert';

const AddScreen = () => {
  const { add: addTestPlan } = useWordPairsDatabase();
  const { add: addDictionary } = useDictionaryDatabase();
  const { t } = useTranslation();
  const { setSuccessAlertData, setErrorAlertData } = useAlertContext();

  useEffect(() => {
    if (foreignInputRef.current) {
      foreignInputRef.current.focus();
    }
  }, []);

  const foreignInputRef = useRef(null);
  const nativeInputRef = useRef(null);

  const handleOnSubmitToTestPlan = () => {
    if (foreignInputRef.current.value && nativeInputRef.current.value) {
      addTestPlan({
        foreign: toLower(foreignInputRef.current.value),
        native: toLower(nativeInputRef.current.value),
      })
        .then(() => {
          setSuccessAlertData(t(ADD_WORD_SCREEN__WORD_ADDED_TO_TEST_PLAN_NOTIFICATION_SUCCESS));
        })
        .catch(() => {
          setErrorAlertData(t(ADD_WORD_SCREEN__WORD_ADDED_NOTIFICATION_ERROR));
        })
        .finally(() => {
          foreignInputRef.current.value = '';
          nativeInputRef.current.value = '';

          foreignInputRef.current.focus();
        })
    }
  }

  const handleOnSubmitToDictionary = () => {
    if (foreignInputRef.current.value && nativeInputRef.current.value) {
      addDictionary({
        foreign: toLower(foreignInputRef.current.value),
        native: toLower(nativeInputRef.current.value),
      })
        .then(() => {
          setSuccessAlertData(t(ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS));
        })
        .catch(() => {
          setErrorAlertData(t(ADD_WORD_SCREEN__WORD_ADDED_NOTIFICATION_ERROR));
        })
        .finally(() => {
          foreignInputRef.current.value = '';
          nativeInputRef.current.value = '';

          foreignInputRef.current.focus();
        })
    }
  }

  return (
    <ScreenContainer>
      <ScreenHeader
        title={t(ADD_WORD_SCREEN__TITLE)}
        description={t(ADD_WORD_SCREEN__DESCRIPTION)}
      />
      <form className="mb-2">
        <div className="mb-4 flex flex-col gap-6">
          <Input inputRef={foreignInputRef} size="lg" label={t(COMMON__FOREIGN)} />
          <Input inputRef={nativeInputRef} size="lg" label={t(COMMON__NATIVE)} />
        </div>

        <div className="flex items-center gap-2 mt-6">
          <Button
            fullWidth
            size="sm"
            variant="outlined"
            className="flex justify-center items-center gap-2"
            onClick={handleOnSubmitToTestPlan}
          >
            <ChecklistSvg />
            {t(ADD_WORD_SCREEN__ACTION_ADD_TO_TEST_PLAN)}
          </Button>
          <Button
            fullWidth
            size="sm"
            className="flex justify-center items-center gap-2"
            onClick={handleOnSubmitToDictionary}
          >
            <DictionarySvg />
            {t(ADD_WORD_SCREEN__ACTION_ADD_TO_LIST)}
          </Button>
        </div>
      </form>
    </ScreenContainer>
  )
}

export default AddScreen;
