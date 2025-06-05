import { useDictionary } from '../../entities';

import { openExternalDictionaryPageByWord } from '../../shared/utils/navigation';

export const useOpenExternalDictionary = (id) => {
  const { selectForeignById } = useDictionary();

  const handleOpenExternalDictionary = () => {
    openExternalDictionaryPageByWord(selectForeignById(id));
  };

  return { handleOpenExternalDictionary };
};
