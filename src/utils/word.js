import { compose, prop } from 'ramda';

import { WORD_PAIR_KEYS } from '../constants/word';

export const getNativeWordById = (id) => (entities) => (
  compose(prop(WORD_PAIR_KEYS.NATIVE), prop(id))(entities)
);
export const getForeignWordById = (id) => (entities) => (
  compose(prop(WORD_PAIR_KEYS.FOREIGN), prop(id))(entities)
);
export const getTranscriptionWordById = (id) => (entities) => (
  compose(prop(WORD_PAIR_KEYS.TRANSCRIPTION), prop(id))(entities)
);
export const getPartOfSpeechWordById = (id) => (entities) => (
  compose(prop(WORD_PAIR_KEYS.PART_OF_SPEECH), prop(id))(entities)
);
