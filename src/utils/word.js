import { compose, prop } from 'ramda';

export const getNativeWordById = (entities) => (id) => compose(prop('native'), prop(id))(entities);
export const getForeignWordById = (entities) => (id) => compose(prop('foreign'), prop(id))(entities);
export const getTranscriptionWordById = (entities) => (id) => compose(prop('transcription'), prop(id))(entities);