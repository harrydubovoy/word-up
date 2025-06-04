import { compose, prop } from 'ramda';

import { WORD_PAIR_KEYS } from '../constants/word.js';

const createGetWordById = (type) => (id) => (entities) => (
  compose(prop(type), prop(id))(entities)
);
export const getNativeWordById = createGetWordById(WORD_PAIR_KEYS.NATIVE);
export const getForeignWordById = createGetWordById(WORD_PAIR_KEYS.FOREIGN);
export const getTranscriptionWordById = createGetWordById(WORD_PAIR_KEYS.TRANSCRIPTION);
export const getPartOfSpeechWordById = createGetWordById(WORD_PAIR_KEYS.PART_OF_SPEECH);
export const getDescriptionWordById = createGetWordById(WORD_PAIR_KEYS.DESCRIPTION);
