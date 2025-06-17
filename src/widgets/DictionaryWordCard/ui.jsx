import { WordCard } from '../../ui/WordCard';
import { Button } from '../../ui-kit/Button';
import { useDictionary } from '../../entities';
import { Branch } from '../../shared/utils/Branch';

import { useDictionaryCardController } from './controller';
import { useOpenExternalDictionary } from './useOpenExternalDictionary';
import { useRedirectToEditPage } from './useRedirectToEditPage';

export function DictionaryWordCard({ id }) {
  const { handleNavigateToEditPage } = useRedirectToEditPage(id);
  const { handleOpenExternalDictionary } = useOpenExternalDictionary(id);

  const {
    selectForeignById,
    selectNativeById,
    selectTranscription,
    selectPartOfSpeechById,
    selectDescriptionById,
  } = useDictionary();

  const {
    isExistAtTestPlan,
    handleMoveToArchive,
    handleToggleTestPlan,
  } = useDictionaryCardController(id);

  return (
    <WordCard
      isSelected={isExistAtTestPlan}
      foreign={selectForeignById(id)}
      native={selectNativeById(id)}
      transcription={selectTranscription(id)}
      partOfSpeech={selectPartOfSpeechById(id)}
      description={selectDescriptionById(id)}
      renderActions={() => (
        <>
          <Button size="small" onClick={handleMoveToArchive}>
            [Del]
          </Button>

          <Button size="small" onClick={handleNavigateToEditPage}>
            [Ed]
          </Button>

          <Button size="small" onClick={handleOpenExternalDictionary}>
            [Info]
          </Button>

          <Button size="small" onClick={handleToggleTestPlan}>
            <Branch
              condition={isExistAtTestPlan}
              slotIf="[Excl]"
              slotElse="[Incl]"
            />
          </Button>
        </>
      )}
    />
  );
}
