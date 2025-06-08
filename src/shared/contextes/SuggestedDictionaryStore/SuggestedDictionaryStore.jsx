import { useEffect, useState, createContext, useContext } from 'react';

const SuggestedDictionaryStoreContext = createContext(undefined);

export const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

async function loadWordList(letter) {
  const [originalResponse, translationResponse] = await Promise.all([
    fetch(`/suggested-dictionary/${letter}.json`),
    fetch(`/suggested-dictionary/${letter}-ua.json`),
  ]);

  if (!originalResponse.ok || !translationResponse.ok) {
    throw new Error('Failed to load word lists');
  }

  const [original, translation] = await Promise.all([
    originalResponse.json(),
    translationResponse.json(),
  ]);

  return { original, translation };
}

export function SuggestedDictionaryStoreProvider({ children }) {
  const [data, setData] = useState({
    original: {
      entities: {
        ids: [],
        byId: {},
      },
    },
    translation: {
      entities: {
        byId: {},
      },
    },
  });

  const loadDictionaryByLetter = async (letter) => {
    try {
      const result = await loadWordList(letter);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDictionaryByLetter(letters[0]);
  }, []);

  return (
    <SuggestedDictionaryStoreContext.Provider value={{ data, loadDictionaryByLetter }}>
      {children}
    </SuggestedDictionaryStoreContext.Provider>
  );
}

export const useSuggestedDictionaryStoreContext = () => {
  const context = useContext(SuggestedDictionaryStoreContext);
  if (!context) {
    throw new Error('useSuggestedDictionaryStoreContext must be used within a AsideContentPortalProvider');
  }

  return context;
};
