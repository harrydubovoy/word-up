import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { WordCard } from '../../ui/WordCard';

import { ButtonIcon } from '../../ui-kit/Button';
import { useArchive } from '../../entities';

import { useArchiveCardController } from './controller';

export function ArchiveWordCard({ id }) {
  const {
    selectForeignById,
    selectNativeById,
    selectTranscription,
    selectPartOfSpeechById,
  } = useArchive();

  const { handleRemove, handleRestore } = useArchiveCardController(id);

  return (
    <WordCard
      foreign={selectForeignById(id)}
      native={selectNativeById(id)}
      transcription={selectTranscription(id)}
      partOfSpeech={selectPartOfSpeechById(id)}
      renderActions={() => (
        <>
          <ButtonIcon onClick={handleRestore}>
            <RestoreOutlinedIcon />
          </ButtonIcon>
          <ButtonIcon onClick={handleRemove}>
            <DeleteForeverOutlinedIcon />
          </ButtonIcon>
        </>
      )}
    />
  );
}
