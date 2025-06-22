import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { WordCard } from '../../ui/WordCard';
import { ButtonIcon } from '../../ui-kit/Button';
import { openExternalDictionaryPageByWord } from '../../shared/utils/navigation';

import { useSuggestedDictionaryCardController } from './controller';

export function SuggestedDictionaryWordCard({ id }) {
  const handleOpenExternalDictionary = (word) => () => {
    openExternalDictionaryPageByWord(word);
  };

  const {
    foreign,
    native,
    transcription,
    partOfSpeech,
    description,

    handleAddToDication,
  } = useSuggestedDictionaryCardController(id);

  return (
    <WordCard
      foreign={foreign}
      native={native}
      transcription={transcription}
      partOfSpeech={partOfSpeech}
      description={description}
      renderActions={() => (
        <>

          <ButtonIcon onClick={handleOpenExternalDictionary(foreign)}>
            <PublicOutlinedIcon />
          </ButtonIcon>

          <ButtonIcon onClick={handleAddToDication}>
            <AddOutlinedIcon />
          </ButtonIcon>
        </>
      )}
    />
  );
}
