import React, { useEffect, useState } from "react";
import { map, addIndex, length, prop, reverse } from 'ramda';

import IconButton from '../../ui/IconButton';
import Typography from '../../ui/Typography';
import Hr from "../../ui/Hr";

import EmptyContent from '../../screen-components/EmptyContent';
import { useAlertContext } from '../../components/Alert';
import FlagIcon, { FLAG_ICON_TYPE } from '../../components/FlagIcon';

import TrashSvg from '../../icons/TrashSvg';
import ListAdd from '../../icons/ListAdd';

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
import classNames from "classnames";

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

  if (!isLoaded) {
    return null;
  }

  if (!length(data)) {
    return <EmptyContent>{t(LIST_SCREEN__EMPTY_DICTIONARY)}</EmptyContent>;
  }

  return (
    <div className="w-full table-auto text-left">
      <div>
        {addIndex(map)((wordPair, index) => (
          <div
            key={prop('id')(wordPair)}
            className={classNames('flex border-blue-gray-50', {
              'border-b': index !== length(data) - 1,
            })}
          >
            <div className="flex items-center justify-center shrink-0 p-3 w-12 text-sm bg-blue-gray-50/50">
              {index + 1}
            </div>
            <div className="w-full p-3">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal flex items-center gap-2"
              >
                <FlagIcon type={FLAG_ICON_TYPE.ENG} /> {prop('foreign')(wordPair)}
              </Typography>
              <div className="my-1">
                <Hr />
              </div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal flex gap-2 items-center"
              >
                <FlagIcon type={FLAG_ICON_TYPE.UA} /> {prop('native')(wordPair)}
              </Typography>
            </div>
            <div className="flex items-center gap-2 p-3 ml-auto">
              <IconButton size="sm" onClick={handleOnAddToTestPlan(wordPair)}>
                <ListAdd />
              </IconButton>
              <IconButton variant="outlined" size="sm" onClick={handleOnRemove(wordPair)}>
                <TrashSvg />
              </IconButton>
            </div>
          </div>
        ), reverse(data))}
      </div>
    </div>
  );
}

export default Dictionary;
