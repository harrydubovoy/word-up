import { useRef } from 'react';
import { Globe } from 'lucide-react';

import { Box } from '../ui/Box';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Textarea } from '../ui/Textarea';

import { useTranslation } from '../translations';
import { COMMON__FOREIGN, COMMON__NATIVE } from '../translations/resources/constants';

import { WORD_PAIR_KEYS } from '../constants/word';
import { openExternalDictionaryPageByWord } from '../utils/navigation';

function WordPairFormFields({ foreign, native, transcription, partOfSpeech, description }) {
  const foreignInputRef = useRef(null);

  const { t } = useTranslation();

  const handleOnOpenDictionary = () => {
    if (foreignInputRef.current?.value) {
      openExternalDictionaryPageByWord(foreignInputRef.current?.value);
    }
  };

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-col gap-2">
        <Label htmlFor={WORD_PAIR_KEYS.FOREIGN}>{t(COMMON__FOREIGN)}</Label>
        <Box className="relative flex w-full">
          <Input
            autoFocus
            id={WORD_PAIR_KEYS.FOREIGN}
            className="pr-10"
            ref={foreignInputRef}
            defaultValue={foreign}
          />
          <Box className="!absolute right-0 top-0">
            <Button
              type="button"
              size="icon"
              onClick={handleOnOpenDictionary}
            >
              <Globe />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col gap-2">
        <Label htmlFor={WORD_PAIR_KEYS.NATIVE}>{t(COMMON__NATIVE)}</Label>
        <Input id={WORD_PAIR_KEYS.NATIVE} defaultValue={native} />
      </Box>
      <Box className="flex flex-col gap-2">
        <Label htmlFor={WORD_PAIR_KEYS.TRANSCRIPTION}>Transcription</Label>
        <Input id={WORD_PAIR_KEYS.TRANSCRIPTION} defaultValue={transcription} />
      </Box>
      <Box className="flex flex-col gap-2">
        <Label htmlFor={WORD_PAIR_KEYS.PART_OF_SPEECH}>Part of speech</Label>
        <Input id={WORD_PAIR_KEYS.PART_OF_SPEECH} defaultValue={partOfSpeech} />
      </Box>
      <Box className="flex flex-col gap-2">
        <Label htmlFor={WORD_PAIR_KEYS.DESCRIPTION}>Description / Meaning / Example</Label>
        <Textarea id={WORD_PAIR_KEYS.DESCRIPTION} defaultValue={description} />
      </Box>
    </Box>
  );
}

export default WordPairFormFields;
