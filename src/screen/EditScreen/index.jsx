import { useRef, useState } from 'react';
import { prop } from 'ramda';
import { useParams, useNavigate } from 'react-router-dom';
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
} from '../../translations/resources/constants';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  updateOneDictionary,
  selectByIdDictionary,
} from '../../store/reducer/dictionary.slice';

import { getTargetValue } from '../../utils/input';
import { openExternalDictionaryPageByWord } from '../../utils/navigation';
import { normalizeValue } from '../../utils/string';

import { WORD_PAIR_KEYS } from '../../constants/word';

function EditScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const byIdDictionary = useAppSelector((state) => selectByIdDictionary(state, id));

  const { t } = useTranslation();

  const foreignInputRef = useRef(null);
  const [foreign, setForeign] = useState(prop(WORD_PAIR_KEYS.FOREIGN)(byIdDictionary));
  const [native, setNative] = useState(prop(WORD_PAIR_KEYS.NATIVE)(byIdDictionary));
  const [
    transcription,
    setTranscription,
  ] = useState(prop(WORD_PAIR_KEYS.TRANSCRIPTION)(byIdDictionary));
  const [
    partOfSpeech,
    setPartOfSpeech,
  ] = useState(prop(WORD_PAIR_KEYS.PART_OF_SPEECH)(byIdDictionary));
  const [
    description,
    setDescription,
  ] = useState(prop(WORD_PAIR_KEYS.DESCRIPTION)(byIdDictionary));

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

  const handleOnCancel = () => {
    navigate(-1);
  };

  const handleOnUpdate = () => {
    if (!(foreign && native)) {
      return;
    }

    dispatch(updateOneDictionary({
      id,
      changes: {
        [WORD_PAIR_KEYS.FOREIGN]: normalizeValue(foreign),
        [WORD_PAIR_KEYS.NATIVE]: normalizeValue(native),
        [WORD_PAIR_KEYS.TRANSCRIPTION]: normalizeValue(transcription),
        [WORD_PAIR_KEYS.PART_OF_SPEECH]: normalizeValue(partOfSpeech),
        [WORD_PAIR_KEYS.DESCRIPTION]: description,
      },
    }));
    navigate(-1);
  };

  return (
    <>
      <Header />
      <ScrollContainer>
        <ScreenBody>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="edit-foreign-word">{t(COMMON__FOREIGN)}</Label>
                <div className="relative flex w-full">
                  <Input
                    id="edit-foreign-word"
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
                <Label htmlFor="edit-native-word">{t(COMMON__NATIVE)}</Label>
                <Input
                  id="edit-native-word"
                  value={native}
                  onChange={handleOnChangeNative}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="edit-transcription">Transcription</Label>
                <Input
                  id="edit-transcription"
                  value={transcription}
                  onChange={handleOnChangePartOfSpeech}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="edit-part-of-speech">Part of speech</Label>
                <Input
                  id="edit-part-of-speech"
                  value={partOfSpeech}
                  onChange={handleOnChangePartOfSpeech}
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
                <Label htmlFor="edit-description">Description / Meaning / Example</Label>
                <Textarea
                  id="edit-description"
                  value={description}
                  onChange={handleOnChangeDescription}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <Button type="button" variant="outline" className="w-full" onClick={handleOnCancel}>
                Cancel
              </Button>
              <Button type="button" className="w-full" onClick={handleOnUpdate}>
                Update
              </Button>
            </div>
          </form>
        </ScreenBody>
      </ScrollContainer>
    </>
  );
}

export default EditScreen;
