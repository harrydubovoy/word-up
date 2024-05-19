import {useEffect, useState} from 'react';
import { length, map, prop, reverse } from 'ramda';

import IconButton from '../../ui/IconButton';
import DoneSvg from '../../icons/DoneSvg';
import EditSvg from '../../icons/EditSvg';
import PublicSvg from '../../icons/PublicSvg';

import ScreenBody from '../../screen-components/ScreenBody';
import EmptyScreen, { EMPTY_SCREEN_TYPE } from '../EmptyScreen';
import { useAlertContext } from '../../components/Alert';
import WordPairCard from '../../components/WordPairCard';

import { openOxfordDictionaryPageByWord } from '../../utils/navigation';

import { useTrashBinDatabase, useWordPairsDatabase } from '../../database';
import { useTranslation } from '../../translations';

import {
  LIST_SCREEN__REMOVE_WORD_NOTIFICATION_SUCCESS,
} from '../../translations/resources/constants';

const TestPlan = () => {
  const { getAll, removeById } = useWordPairsDatabase();
  const { add } = useTrashBinDatabase();
  const { t } = useTranslation();
  const { setSuccessAlertData } = useAlertContext();

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAll()
      .then(setData)
      .finally(() => setIsLoaded(true));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnRemove = (wordPair) => () => {
    Promise.all([
      add({
        foreign: prop('foreign')(wordPair),
        native: prop('native')(wordPair),
      }),
      removeById(prop('id')(wordPair)),
    ])
      .then(getAll)
      .then(setData)
      .then(() => setSuccessAlertData(t(LIST_SCREEN__REMOVE_WORD_NOTIFICATION_SUCCESS)))
      .catch()
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
                  native={prop('native')(wordPair)}
                  foreign={prop('foreign')(wordPair)}
                />
                <WordPairCard.Footer>
                  <IconButton variant="outlined" size="sm" onClick={handleOnOpenDictionary(wordPair)}>
                    <PublicSvg />
                  </IconButton>
                  <IconButton variant="outlined" size="sm" disabled>
                    <EditSvg />
                  </IconButton>
                  <IconButton variant="filled" size="sm" onClick={handleOnRemove(wordPair)}>
                    <DoneSvg />
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

export default TestPlan;
