import { Stack } from '../../ui-kit/Stack';
import { Input } from '../../ui-kit/Input';
import { Textarea } from '../../ui-kit/Textarea';

import { useFormHandlerContext } from '../../shared/contextes/FormHandler';
import { openExternalDictionaryPageByWord } from '../../shared/utils/navigation';
import { normalizeValue } from '../../shared/utils/string';
import { WORD_PAIR_KEYS } from '../../shared/constants/word';

export function WordFormFields() {
  const { register, values } = useFormHandlerContext();

  const handleOnOpenDictionary = () => {
    openExternalDictionaryPageByWord(normalizeValue(values[WORD_PAIR_KEYS.FOREIGN]));
  };

  return (
    <Stack spacing={0}>
      <Input
        {...register(WORD_PAIR_KEYS.FOREIGN)}
        autoFocus
        required
        label="Foreign"
      />
      <Input
        {...register(WORD_PAIR_KEYS.NATIVE)}
        label="Native"
        required
      />
      <Input
        {...register(WORD_PAIR_KEYS.TRANSCRIPTION)}
        label="Transcription"
      />
      <Input
        {...register(WORD_PAIR_KEYS.PART_OF_SPEECH)}
        label="Part of speech"
      />
      <Textarea
        {...register(WORD_PAIR_KEYS.DESCRIPTION)}
        label="Description / Meaning / Example"
      />
    </Stack>
  );
}
