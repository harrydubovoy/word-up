import { useEffect, useState } from 'react';
import { map, length, prop, reverse } from 'ramda';

import IconButton from '../../ui/IconButton';

import ScreenBody from '../../screen-components/ScreenBody';
import EmptyScreen, { EMPTY_SCREEN_TYPE } from '../EmptyScreen';
import { useAlertContext } from '../../components/Alert';
import WordPairCard from '../../components/WordPairCard';

import TrashSvg from '../../icons/TrashSvg';
import ListAdd from '../../icons/ListAdd';
import EditSvg from '../../icons/EditSvg';
import PublicSvg from '../../icons/PublicSvg';

import { openOxfordDictionaryPageByWord } from '../../utils/navigation';

import {
  useDictionaryDatabase,
  useTrashBinDatabase,
  useWordPairsDatabase,
} from '../../database';
import { useTranslation } from '../../translations';
import {
  LIST_SCREEN__REMOVE_WORD_NOTIFICATION_SUCCESS,
  LIST_SCREEN__ADD_TO_TEST_PLAN_NOTIFICATION_SUCCESS,
} from '../../translations/resources/constants';

const Dictionary = () => {
  const { getAll, removeById } = useDictionaryDatabase();
  const { add: addToTrashBin } = useTrashBinDatabase();
  const { add: addToWordPairs } = useWordPairsDatabase();
  const { t } = useTranslation();
  const { setSuccessAlertData } = useAlertContext();

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAll()
      .then(setData)
      .finally(() => setIsLoaded(true));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnAddToTestPlan = (wordPair) => () => {
    Promise.all([
      removeById(prop('id')(wordPair)),
      addToWordPairs({
        foreign: prop('foreign')(wordPair),
        native: prop('native')(wordPair),
      })
    ])
      .then(getAll)
      .then(setData)
      .then(() => setSuccessAlertData(t(LIST_SCREEN__ADD_TO_TEST_PLAN_NOTIFICATION_SUCCESS)))
      .catch();
  }

  const handleOnRemove = (wordPair) => () => {
    Promise.all([
      removeById(prop('id')(wordPair)),
      addToTrashBin({
        foreign: prop('foreign')(wordPair),
        native: prop('native')(wordPair),
      })
    ])
      .then(getAll)
      .then(setData)
      .then(() => setSuccessAlertData(t(LIST_SCREEN__REMOVE_WORD_NOTIFICATION_SUCCESS)))
      .catch();
  }

  const handleOnOpenDictionary = (wordPair) => () => {
    openOxfordDictionaryPageByWord(prop('foreign')(wordPair))
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <EmptyScreen type={!length(data) && EMPTY_SCREEN_TYPE.DEFAULT}>
      <ScreenBody className="bg-catskill-white">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-4">
            {map((wordPair) => (
              <WordPairCard key={prop('id')(wordPair)}>
                <WordPairCard.Body
                  foreign={prop('foreign')(wordPair)}
                  native={prop('native')(wordPair)}
                />
                <WordPairCard.Footer>
                  <IconButton variant="outlined" size="sm" onClick={handleOnRemove(wordPair)}>
                    <TrashSvg />
                  </IconButton>
                  <IconButton variant="outlined" size="sm" onClick={handleOnOpenDictionary(wordPair)}>
                    <PublicSvg />
                  </IconButton>
                  <IconButton variant="outlined" size="sm" disabled>
                    <EditSvg />
                  </IconButton>
                  <IconButton size="sm" onClick={handleOnAddToTestPlan(wordPair)}>
                    <ListAdd />
                  </IconButton>
                </WordPairCard.Footer>
              </WordPairCard>
            ), reverse(data))}
          </div>
        </div>
      </ScreenBody>
    </EmptyScreen>
  )
}

export default Dictionary;
