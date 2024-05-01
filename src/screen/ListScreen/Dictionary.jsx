import React, { useEffect, useState } from 'react';
import { map, length, prop, reverse } from 'ramda';

import IconButton from '../../ui/IconButton';
import Typography from '../../ui/Typography';
import {
  Card,
  CardBody,
  CardFooter,
} from '../../ui/Card';

import EmptyContent from '../../screen-components/EmptyContent';
import { useAlertContext } from '../../components/Alert';
import FlagIcon, { FLAG_ICON_TYPE } from '../../components/FlagIcon';

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
  LIST_SCREEN__EMPTY_DICTIONARY,
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

  if (!length(data)) {
    return <EmptyContent>{t(LIST_SCREEN__EMPTY_DICTIONARY)}</EmptyContent>;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4">
        {map((wordPair) => (
          <Card className="w-full p-3.5"  key={prop('id')(wordPair)}>
            <CardBody className="p-0 pb-1">
              <div className="w-full flex flex-col gap-2">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal flex items-center gap-2"
                >
                  <FlagIcon type={FLAG_ICON_TYPE.ENG} /> {prop('foreign')(wordPair)}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal flex gap-2 items-center"
                >
                  <FlagIcon type={FLAG_ICON_TYPE.UA} /> {prop('native')(wordPair)}
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="p-0">
              <div className="flex justify-end gap-2">
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
              </div>
            </CardFooter>
          </Card>
        ), reverse(data))}
      </div>
    </div>
  )
}

export default Dictionary;
