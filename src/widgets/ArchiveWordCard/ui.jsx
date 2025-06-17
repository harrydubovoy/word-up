import { WordCard } from '../../ui/WordCard';

import { Button } from '../../ui-kit/Button';
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
          <Button size="small" onClick={handleRestore}>
            [Rest]
          </Button>
          <Button size="small" onClick={handleRemove}>
            [Del]
          </Button>
        </>
      )}
    />
  );
}
