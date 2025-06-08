import { SuggestedDictionaryStoreProvider } from '../../shared/contextes/SuggestedDictionaryStore';

import { SuggestedDictionaryList } from './SuggestedDictionaryList';

export function SuggestedDictionaryPage() {
  return (
    <SuggestedDictionaryStoreProvider>
      <SuggestedDictionaryList />
    </SuggestedDictionaryStoreProvider>
  );
}
