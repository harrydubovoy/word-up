import { useEffect, useState } from 'react';
import { map, length, prop, reverse } from 'ramda';

import IconButton from '../../ui/IconButton';
import { Card, CardBody, CardFooter } from '../../ui/Card';

import TrashForeverSvg from '../../icons/TrashForeverSvg';
import RefreshSvg from '../../icons/RefreshSvg';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';
import WordPair from '../../components/WordPair';
import EmptyScreen, { EMPTY_SCREEN_TYPE } from '../EmptyScreen';

import Header from './Header';

import { useAlertContext } from '../../components/Alert';

import { useTrashBinDatabase, useDictionaryDatabase } from '../../database';
import { useTranslation } from '../../translations';
import {
  TRASH_BIN_SCREEN__RESTORE_NOTIFICATION_SUCCESS,
  TRASH_BIN_SCREEN__REMOVE_FOREVER_NOTIFICATION_SUCCESS,
} from '../../translations/resources/constants';

const TrashBinScreen = () => {
  const { getAll, removeById } = useTrashBinDatabase();
  const { add } = useDictionaryDatabase();
  const { t } = useTranslation();
  const { setSuccessAlertData } = useAlertContext();

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAll()
      .then(setData)
      .finally(() => setIsLoaded(true));
  }, [getAll]);

  const handleOnRemove = (wordPair) => () => {
    removeById(prop('id')(wordPair))
      .then(getAll)
      .then(setData)
      .then(() => setSuccessAlertData(t(TRASH_BIN_SCREEN__REMOVE_FOREVER_NOTIFICATION_SUCCESS)))
      .catch()
  }

  const handleRestore = (wordPair) => () => {
    Promise.all([
      removeById(prop('id')(wordPair)),
      add({
        foreign: prop('foreign')(wordPair),
        native: prop('native')(wordPair),
      })
    ])
      .then(getAll)
      .then(setData)
      .then(() => setSuccessAlertData(t(TRASH_BIN_SCREEN__RESTORE_NOTIFICATION_SUCCESS)))
      .catch()
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <Header />
      <ScrollContainer>
        <EmptyScreen type={!length(data) && EMPTY_SCREEN_TYPE.DEFAULT}>
          <ScreenBody className="bg-catskill-white">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {map((wordPair) => (
                  <Card className="w-full p-3.5"  key={prop('id')(wordPair)}>
                    <CardBody className="p-0">
                      <WordPair
                        native={prop('native')(wordPair)}
                        foreign={prop('foreign')(wordPair)}
                      />
                    </CardBody>
                    <CardFooter className="p-0">
                      <div className="flex justify-end gap-2">
                        <IconButton variant="outlined" size="sm" onClick={handleRestore(wordPair)}>
                          <RefreshSvg />
                        </IconButton>
                        <IconButton size="sm" onClick={handleOnRemove(wordPair)}>
                          <TrashForeverSvg />
                        </IconButton>
                      </div>
                    </CardFooter>
                  </Card>
                ), reverse(data))}
              </div>
            </div>
          </ScreenBody>
        </EmptyScreen>
      </ScrollContainer>
    </>
  )
}

export default TrashBinScreen;
