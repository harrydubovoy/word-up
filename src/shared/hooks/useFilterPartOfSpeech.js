import { useState } from 'react';
import { prop, compose } from 'ramda';

import { FILTER_PART_OF_SPEECH_MAP } from '../constants/filter';

const useFilterPartOfSpeech = () => {
  const [
    filterPartOfSpeechValue,
    setFilterPartOfSpeechValue,
  ] = useState(FILTER_PART_OF_SPEECH_MAP.ALL.value);
  const [
    filterPartOfSpeechDisplayValue,
    setFilterPartOfSpeechDisplayValue,
  ] = useState(FILTER_PART_OF_SPEECH_MAP.ALL.displayValue);

  const handleFilterPartOfSpeechChange = (value) => {
    setFilterPartOfSpeechValue(value);
    setFilterPartOfSpeechDisplayValue(compose(prop('displayValue'), prop(value))(FILTER_PART_OF_SPEECH_MAP));
  };

  return {
    filterPartOfSpeechValue,
    filterPartOfSpeechDisplayValue,
    handleFilterPartOfSpeechChange,
  };
};

export default useFilterPartOfSpeech;
