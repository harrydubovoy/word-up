import { useRef, useState } from 'react';
import { toLower, compose, prop } from 'ramda';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import Input from '../../ui/Input';
import IconButton from '../../ui/IconButton';

import Header from './Heder';
import ScreenBody from '../../screen-components/ScreenBody';
import ScrollContainer from '../../screen-components/ScrollContainer';

import PublicSvg from '../../icons/PublicSvg';

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
import { openOxfordDictionaryPageByWord } from '../../utils/navigation';

const getWordInputValue = (event) => compose(toLower, getTargetValue)(event);

const EditScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const byIdDictionary = useAppSelector((state) => selectByIdDictionary(state, id));

  const { t } = useTranslation();

  const foreignInputRef = useRef(null);
  const [foreign, setForeign] = useState(prop('foreign')(byIdDictionary));
  const [native, setNative] = useState(prop('native')(byIdDictionary));
  const [transcription, setTranscription] = useState(prop('transcription')(byIdDictionary));

  const handleOnChangeForeign = (event) => {
    setForeign(getWordInputValue(event));
  }

  const handleOnChangeNative = (event) => {
    setNative(getWordInputValue(event));
  }

  const handleOnChangeTranscription = (event) => {
    setTranscription(getWordInputValue(event));
  }

  const handleOnOpenDictionary = () => openOxfordDictionaryPageByWord(foreign);

  const handleOnCancel = () => {
    navigate(-1);
  }

  const handleOnUpdate = () => {
    if (!foreign && !native) {
      return;
    }

    dispatch(updateOneDictionary({ id, changes: { foreign, native, transcription }}));
    navigate(-1);
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
                  value={foreign}
                  label={t(COMMON__FOREIGN)}
                  inputRef={foreignInputRef}
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
                variant="outlined"
                className="flex justify-center items-center gap-2"
                onClick={handleOnCancel}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                className="flex justify-center items-center gap-2"
                disabled={!(foreign && native)}
                onClick={handleOnUpdate}
              >
                Update
              </Button>
            </div>
          </form>
        </ScreenBody>
      </ScrollContainer>
    </>
  )
}

export default EditScreen;