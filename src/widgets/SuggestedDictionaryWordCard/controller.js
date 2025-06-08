import { useDictionary } from '../../entities';
import { useAsideContentPortalContext } from '../../shared/contextes/AsideContentPortal';
import { useSuggestedDictionaryStoreContext } from '../../shared/contextes/SuggestedDictionaryStore';

export const useSuggestedDictionaryCardController = (id) => {
  const { createOne } = useDictionary();

  const { data } = useSuggestedDictionaryStoreContext();

  const wordEntity = {
    foreign: data.original.entities.byId[id].word,
    native: data.translation.entities.byId[id].word,
    transcription: data.original.entities.byId[id].transcription,
    partOfSpeech: data.original.entities.byId[id].partOfSpeech,
    description: data.original.entities.byId[id].description,
  };

  const { addRenderComponent } = useAsideContentPortalContext();

  const handleRenderDescription = (component) => () => {
    addRenderComponent(component);
  };

  const handleAddToDication = () => {
    createOne({ data: wordEntity });
  };

  return {
    ...wordEntity,
    handleAddToDication,
    handleRenderDescription,
  };
};
