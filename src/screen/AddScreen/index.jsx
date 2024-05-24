import { useRef } from 'react';
import { toLower, trim, compose } from 'ramda';

import Button from '../../ui/Button';
import Input from '../../ui/Input';

import Header from './Heder';
import ScreenBody from '../../screen-components/ScreenBody';
import { useAlertContext } from '../../components/Alert';
import DictionarySvg from '../../icons/DictionarySvg';

import { useTranslation } from '../../translations';
import {
  COMMON__FOREIGN,
  COMMON__NATIVE,
  ADD_WORD_SCREEN__ACTION_ADD_TO_LIST,
  ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS,
} from '../../translations/resources/constants';

import { useAppDispatch } from '../../store/hooks'
import { addOneDictionary, dictionaryPayload } from '../../store/reducer/dictionary.slice';

import { getRefValue } from '../../utils/input';

const AddScreen = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { setSuccessAlertData } = useAlertContext();

  const foreignInputRef = useRef(null);
  const nativeInputRef = useRef(null);

  const handleOnSubmitToDictionary = () => {
    if (!getRefValue(foreignInputRef) && !getRefValue(nativeInputRef)) {
      return;
    }

    dispatch(addOneDictionary(dictionaryPayload({
      foreign: compose(toLower, trim, getRefValue)(foreignInputRef),
      native: compose(toLower, trim, getRefValue)(nativeInputRef),
    })));
    setSuccessAlertData(t(ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS));
    foreignInputRef.current.value = '';
    nativeInputRef.current.value = '';

    foreignInputRef.current.focus();
  }

  return (
    <>
      <Header />
      <ScreenBody>
        <form className="mb-2">
          <div className="mb-4 flex flex-col gap-6">
            <Input required autoFocus inputRef={foreignInputRef} size="lg" label={t(COMMON__FOREIGN)} />
            <Input required inputRef={nativeInputRef} size="lg" label={t(COMMON__NATIVE)} />
          </div>

          <div className="flex items-center gap-2 mt-6">
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
      </ScreenBody>
    </>
  )
}

export default AddScreen;
