import { useRef, useState } from 'react';
import { Globe } from 'lucide-react';

import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Textarea } from '../../ui/Textarea';
import { Label } from '../../ui/Label';

import Header from './Heder';
import ScreenBody from '../../screen-components/ScreenBody';
import ScrollContainer from '../../screen-components/ScrollContainer';

import { useTranslation } from '../../translations';
import {
  COMMON__FOREIGN,
  COMMON__NATIVE,
  ADD_WORD_SCREEN__ACTION_ADD_TO_LIST,
} from '../../translations/resources/constants';

import { useAppDispatch } from '../../store/hooks';
import { addOneDictionary, dictionaryPayload } from '../../store/reducer/dictionary.slice';

import { getTargetValue } from '../../utils/input';
import { normalizeValue } from '../../utils/string';
import { openExternalDictionaryPageByWord } from '../../utils/navigation';

import { WORD_PAIR_KEYS } from '../../constants/word';

function AddScreen() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const foreignInputRef = useRef(null);
  const [foreign, setForeign] = useState('');
  const [native, setNative] = useState('');
  const [transcription, setTranscription] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [description, setDescription] = useState('');

  const handleOnChangeForeign = (event) => {
    setForeign(getTargetValue(event));
  };

  const handleOnChangeNative = (event) => {
    setNative(getTargetValue(event));
  };

  const handleOnChangeTranscription = (event) => {
    setTranscription(getTargetValue(event));
  };

  const handleOnChangePartOfSpeech = (event) => {
    setPartOfSpeech(getTargetValue(event));
  };

  const handleOnChangeDescription = (event) => {
    setDescription(getTargetValue(event));
  };

  const handleOnOpenDictionary = () => openExternalDictionaryPageByWord(foreign);

  const handleAfterSending = () => {
    setForeign('');
    setNative('');
    setTranscription('');
    setPartOfSpeech('');
    setDescription('');

    foreignInputRef.current.focus();
  };

  const handleOnAdd = () => {
    if (!(foreign && native)) {
      return null;
    }

    dispatch(addOneDictionary(dictionaryPayload({
      [WORD_PAIR_KEYS.FOREIGN]: normalizeValue(foreign),
      [WORD_PAIR_KEYS.NATIVE]: normalizeValue(native),
      [WORD_PAIR_KEYS.TRANSCRIPTION]: normalizeValue(transcription),
      [WORD_PAIR_KEYS.PART_OF_SPEECH]: normalizeValue(partOfSpeech),
      [WORD_PAIR_KEYS.DESCRIPTION]: description,
    })));
    handleAfterSending();

    return null;
  };

  return (
    <>
      <Header />
      <ScrollContainer>
        <ScreenBody>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="add-foreign-word">{t(COMMON__FOREIGN)}</Label>
                <div className="relative flex w-full">
                  <Input
                    id="add-foreign-word"
                    className="pr-10"
                    ref={foreignInputRef}
                    value={foreign}
                    onChange={handleOnChangeForeign}
                  />
                  <div className="!absolute right-0 top-0">
                    <Button
                      type="button"
                      size="icon"
                      disabled={!foreign}
                      onClick={handleOnOpenDictionary}
                    >
                      <Globe />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="add-native-word">{t(COMMON__NATIVE)}</Label>
                <Input
                  id="add-native-word"
                  value={native}
                  onChange={handleOnChangeNative}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="add-transcription">Transcription</Label>
                <Input
                  id="add-transcription"
                  value={transcription}
                  onChange={handleOnChangeTranscription}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="add-part-of-speech">Part of speech</Label>
                <Input
                  id="add-part-of-speech"
                  value={partOfSpeech}
                  onChange={handleOnChangePartOfSpeech}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="add-description">Description / Meaning / Example</Label>
                <Textarea
                  id="add-description"
                  value={description}
                  onChange={handleOnChangeDescription}
                />
              </div>
            </div>

            <div className="mt-6">
              <Button type="button" onClick={handleOnAdd} className="w-full">
                {t(ADD_WORD_SCREEN__ACTION_ADD_TO_LIST)}
              </Button>
            </div>
          </form>
        </ScreenBody>
      </ScrollContainer>
    </>
  );
}

export default AddScreen;
