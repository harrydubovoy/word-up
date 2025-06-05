import { compose, prop } from 'ramda';

import { useDictionary } from '../../../entities';
import { WORD_PAIR_KEYS } from '../../../shared/constants/word';

import { getCurrentEntityId, isTestReversed } from '../utils';

export const useCurrentQuestionWord = ({ cursor, data, wordKeyType }) => {
  const { dictionaryEntities } = useDictionary();

  const getQuestionWordForeign = compose(
    prop(WORD_PAIR_KEYS.FOREIGN),
    prop(getCurrentEntityId(cursor)(data)),
  );
  const getQuestionWordNative = compose(
    prop(WORD_PAIR_KEYS.NATIVE),
    prop(getCurrentEntityId(cursor)(data)),
  );
  const getTranscription = compose(
    prop(WORD_PAIR_KEYS.TRANSCRIPTION),
    prop(getCurrentEntityId(cursor)(data)),
  );
  const getPartOfSpeech = compose(
    prop(WORD_PAIR_KEYS.PART_OF_SPEECH),
    prop(getCurrentEntityId(cursor)(data)),
  );

  return {
    isTestReversed: isTestReversed(wordKeyType),
    questionWord: (
      isTestReversed(wordKeyType)
        ? getQuestionWordNative(dictionaryEntities)
        : getQuestionWordForeign(dictionaryEntities)
    ),
    questionWordForeign: getQuestionWordForeign(dictionaryEntities),
    questionWordNative: getQuestionWordNative(dictionaryEntities),
    transcription: getTranscription(dictionaryEntities),
    partOfSpeech: getPartOfSpeech(dictionaryEntities),
  };
};
