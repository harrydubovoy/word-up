import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

import { WordCard } from '../../ui/WordCard';
import { ButtonIcon } from '../../ui-kit/Button';
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

          <ButtonIcon onClick={handleMoveToArchive}>
            <ArchiveOutlinedIcon />
          </ButtonIcon>

          <ButtonIcon onClick={handleNavigateToEditPage}>
            <EditOutlinedIcon />
          </ButtonIcon>

          <ButtonIcon onClick={handleOpenExternalDictionary}>
            <PublicOutlinedIcon />
          </ButtonIcon>

          <ButtonIcon onClick={handleToggleTestPlan}>
            <Branch
              condition={isExistAtTestPlan}
              slotIf={(<RemoveOutlinedIcon />)}
              slotElse={(<AddOutlinedIcon />)}
            />
          </ButtonIcon>
        </>
      )}
    />
  );
}
