import { useRef } from 'react';

import { Box } from '../../ui-kit/Box';

import { FormHandlerProvider } from '../../shared/contextes/FormHandler';
import { WORD_PAIR_KEYS } from '../../shared/constants/word';

import { EditFormWord } from './EditFormWord';
import { useEditController } from './useEditController';

export function EditPage() {
  const {
    foreign,
    native,
    transcription,
    partOfSpeech,
    description,
  } = useEditController();

  const initialState = useRef({
    [WORD_PAIR_KEYS.FOREIGN]: foreign,
    [WORD_PAIR_KEYS.NATIVE]: native,
    [WORD_PAIR_KEYS.TRANSCRIPTION]: transcription,
    [WORD_PAIR_KEYS.PART_OF_SPEECH]: partOfSpeech,
    [WORD_PAIR_KEYS.DESCRIPTION]: description,
  });

  return (
    <Box sx={{ maxWidth: '85%', margin: '0 auto', padding: '8px 0' }}>
      <FormHandlerProvider initialState={initialState.current}>
        <EditFormWord />
      </FormHandlerProvider>
    </Box>
  );
}
