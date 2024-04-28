import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import { addIndex, length, map, prop, reverse } from 'ramda';

import IconButton from '../../ui/IconButton';
import Typography from '../../ui/Typography';
import Hr from '../../ui/Hr';

import DoneSvg from '../../icons/DoneSvg';

import EmptyContent from '../../screen-components/EmptyContent';
import { useAlertContext } from '../../components/Alert';
import FlagIcon, {FLAG_ICON_TYPE} from '../../components/FlagIcon';

import { useTrashBinDatabase, useWordPairsDatabase } from '../../database';
import { useTranslation } from '../../translations';

import {
  LIST_SCREEN__EMPTY_TEST_PLAN,
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

  if (!isLoaded) {
    return null;
  }

  if (!length(data)) {
    return <EmptyContent>{t(LIST_SCREEN__EMPTY_TEST_PLAN)}</EmptyContent>;
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
          <div className="flex items-center p-3 ml-auto">
            <IconButton variant="filled" size="sm" onClick={handleOnRemove(wordPair)}>
              <DoneSvg />
            </IconButton>
          </div>
        </div>
      ), reverse(data))}
      </div>
    </div>
  )
}

export default TestPlan;
