import { compose, prop } from 'ramda';

import { WORD_PAIR_KEYS } from '../constants/word'

export const getNativeWordById = (id) => (entities) => compose(prop(WORD_PAIR_KEYS.NATIVE), prop(id))(entities);
export const getForeignWordById = (id) => (entities) => compose(prop(WORD_PAIR_KEYS.FOREIGN), prop(id))(entities);
export const getTranscriptionWordById = (entities) => (id) => compose(prop(WORD_PAIR_KEYS.TRANSCRIPTION), prop(id))(entities);
