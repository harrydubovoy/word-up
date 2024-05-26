import { useRef, useState } from 'react';

import Button from '../../ui/Button';
import Input from '../../ui/Input';
import IconButton from '../../ui/IconButton';

import Header from './Heder';
import ScreenBody from '../../screen-components/ScreenBody';
import ScrollContainer from '../../screen-components/ScrollContainer';
import { useAlertContext } from '../../components/Alert';

import PublicSvg from '../../icons/PublicSvg';

import { useTranslation } from '../../translations';
import {
  COMMON__FOREIGN,
  COMMON__NATIVE,
  ADD_WORD_SCREEN__ACTION_ADD_TO_LIST,
  ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS,
} from '../../translations/resources/constants';

import { useAppDispatch } from '../../store/hooks'
import { addOneDictionary, dictionaryPayload } from '../../store/reducer/dictionary.slice';

import { getTargetValue } from '../../utils/input';
import { normalizeValue } from '../../utils/string';
import { openOxfordDictionaryPageByWord } from '../../utils/navigation';

import { WORD_PAIR_KEYS } from '../../constants/word';

const AddScreen = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { setSuccessAlertData } = useAlertContext();

  const foreignInputRef = useRef(null);
  const [foreign, setForeign] = useState('');
  const [native, setNative] = useState('');
  const [transcription, setTranscription] = useState('');

  const handleOnChangeForeign = (event) => {
    setForeign(getTargetValue(event));
  }

  const handleOnChangeNative = (event) => {
    setNative(getTargetValue(event));
  }

  const handleOnChangeTranscription = (event) => {
    setTranscription(getTargetValue(event));
  }

  const handleOnOpenDictionary = () => openOxfordDictionaryPageByWord(foreign);

  const handleAfterSending = () => {
    setForeign('');
    setNative('');
    setTranscription('');

    foreignInputRef.current.focus();
  }

  const handleOnAdd = () => {
    if (!(foreign && native)) {
      return null;
    }

    dispatch(addOneDictionary(dictionaryPayload({
      [WORD_PAIR_KEYS.FOREIGN]: normalizeValue(foreign),
      [WORD_PAIR_KEYS.NATIVE]: normalizeValue(native),
      [WORD_PAIR_KEYS.TRANSCRIPTION]: normalizeValue(transcription),
    })));
    setSuccessAlertData(t(ADD_WORD_SCREEN__WORD_ADDED_TO_DICTIONARY_NOTIFICATION_SUCCESS));
    handleAfterSending();
  }

  return (
    <>
      <Header />
      <ScrollContainer>
        <ScreenBody>
          <form>
            <div className="flex flex-col gap-4">
              <div className="relative flex w-full">
                <Input
                  containerProps={{
                    className: 'min-w-0'
                  }}
                  required
                  className="pr-20"
                  size="lg"
                  label={t(COMMON__FOREIGN)}
                  inputRef={foreignInputRef}
                  value={foreign}
                  onChange={handleOnChangeForeign}
                />
                <IconButton
                  size="sm"
                  className="!absolute right-1.5 top-1.5"
                  variant="filled"
                  disabled={!foreign}
                  onClick={handleOnOpenDictionary}
                >
                  <PublicSvg />
                </IconButton>
              </div>
              <Input
                containerProps={{
                  className: 'min-w-0'
                }}
                required
                size="lg"
                label={t(COMMON__NATIVE)}
                value={native}
                onChange={handleOnChangeNative}
              />
              <Input
                containerProps={{
                  className: 'min-w-0'
                }}
                size="lg"
                label="Transcription"
                value={transcription}
                onChange={handleOnChangeTranscription}
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Button
                fullWidth
                className="flex justify-center items-center gap-2"
                onClick={handleOnAdd}
              >
                {t(ADD_WORD_SCREEN__ACTION_ADD_TO_LIST)}
              </Button>
            </div>
          </form>
        </ScreenBody>
      </ScrollContainer>
    </>
  )
}

export default AddScreen;
