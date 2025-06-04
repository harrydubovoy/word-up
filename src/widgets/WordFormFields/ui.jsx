import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

import { Stack } from '../../ui-kit/Stack';
import { TextField } from '../../ui-kit/TextField';
import { ButtonIcon } from '../../ui-kit/Button';

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
    <Stack spacing={2}>
      <TextField
        {...register(WORD_PAIR_KEYS.FOREIGN)}
        autoFocus
        required
        fullWidth
        variant="filled"
        label="Foreign"
        endAdornment={(
          <ButtonIcon
            variant="filled"
            disabled={!values[WORD_PAIR_KEYS.FOREIGN]}
            onClick={handleOnOpenDictionary}
          >
            <PublicOutlinedIcon />
          </ButtonIcon>
        )}
      />
      <TextField
        {...register(WORD_PAIR_KEYS.NATIVE)}
        variant="filled"
        fullWidth
        label="Native"
        required
      />
      <TextField
        {...register(WORD_PAIR_KEYS.TRANSCRIPTION)}
        variant="filled"
        fullWidth
        label="Transcription"
      />
      <TextField
        {...register(WORD_PAIR_KEYS.PART_OF_SPEECH)}
        variant="filled"
        fullWidth
        label="Part of speech"
      />
      <TextField
        {...register(WORD_PAIR_KEYS.DESCRIPTION)}
        variant="filled"
        fullWidth
        multiline
        type="textarea"
        label="Description / Meaning / Example"
      />
    </Stack>
  );
}
