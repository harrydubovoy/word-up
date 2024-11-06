import { useState } from 'react';
import PublicSvg from '@material-design-icons/svg/outlined/public.svg';

import { Box } from '../ui/Box';
import { TextField } from '../ui/TextField';
import { ButtonIcon } from '../ui/Button';

import { useTranslation } from '../translations';
import { COMMON__FOREIGN, COMMON__NATIVE } from '../translations/resources/constants';

import { WORD_PAIR_KEYS } from '../constants/word';
import { openExternalDictionaryPageByWord } from '../utils/navigation';
import { getTargetValue } from '../utils/input';
import { normalizeValue } from '../utils/string';

function WordPairFormFields({ foreign, native, transcription, partOfSpeech, description }) {
  const [foreignInputValue, setForeignInputValue] = useState(() => foreign ?? '');

  const { t } = useTranslation();

  const handleOnChangeForeign = (event) => {
    setForeignInputValue(normalizeValue(getTargetValue(event)));
  };

  const handleOnOpenDictionary = () => {
    openExternalDictionaryPageByWord(foreignInputValue);
  };

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col gap-2">
        <Box className="relative flex w-full">
          <TextField
            autoFocus
            required
            label={t(COMMON__FOREIGN)}
            id={WORD_PAIR_KEYS.FOREIGN}
            className="pr-10"
            variant="filled"
            defaultValue={foreign}
            onChange={handleOnChangeForeign}
          />
          <Box className="!absolute right-2 top-1/2 -translate-y-1/2">
            <ButtonIcon
              variant="filled"
              disabled={!foreignInputValue}
              onClick={handleOnOpenDictionary}
            >
              <PublicSvg />
            </ButtonIcon>
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col gap-2">
        <TextField
          variant="filled"
          label={t(COMMON__NATIVE)}
          required
          id={WORD_PAIR_KEYS.NATIVE}
          defaultValue={native}
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <TextField
          variant="filled"
          label="Transcription"
          id={WORD_PAIR_KEYS.TRANSCRIPTION}
          defaultValue={transcription}
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <TextField
          id={WORD_PAIR_KEYS.PART_OF_SPEECH}
          variant="filled"
          label="Part of speech"
          defaultValue={partOfSpeech}
        />
      </Box>
      <Box className="flex flex-col gap-2">
        <TextField
          id={WORD_PAIR_KEYS.DESCRIPTION}
          variant="filled"
          type="textarea"
          label="Description / Meaning / Example"
          defaultValue={description}
        />
      </Box>
    </Box>
  );
}

export default WordPairFormFields;
