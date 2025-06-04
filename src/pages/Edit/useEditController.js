import { useParams } from 'react-router-dom';

import { useDictionary } from '../../entities';

export const useEditController = () => {
  const { id } = useParams();

  const {
    updateOneById,

    selectForeignById,
    selectNativeById,
    selectTranscription,
    selectPartOfSpeechById,
    selectDescriptionById,
  } = useDictionary();

  const handleUpdateEntity = ({ data }) => {
    updateOneById({ id, data });
  };

  return {
    handleUpdateEntity,

    foreign: selectForeignById(id),
    native: selectNativeById(id),
    transcription: selectTranscription(id),
    partOfSpeech: selectPartOfSpeechById(id),
    description: selectDescriptionById(id),
  };
};
