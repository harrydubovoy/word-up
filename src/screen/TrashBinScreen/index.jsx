import React, { useEffect, useState } from 'react';
import {map, addIndex, length, prop, reverse} from 'ramda';

import IconButton from '../../ui/IconButton';
import Typography from '../../ui/Typography';

import TrashForeverSvg from '../../icons/TrashForeverSvg';
import RefreshSvg from '../../icons/RefreshSvg';

import ScreenContainer from '../../screen-components/ScreenContainer';
import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenHeader from '../../screen-components/ScreenHeader';
import EmptyContent from '../../screen-components/EmptyContent';
import { useAlertContext } from '../../components/Alert';

import { useTrashBinDatabase, useDictionaryDatabase } from '../../database';
import { useTranslation } from '../../translations';
import {
  TRASH_BIN_SCREEN__TITLE,
  TRASH_BIN_SCREEN__DESCRIPTION,
  TRASH_BIN_SCREEN__EMPTY_DESCRIPTION,
  TRASH_BIN_SCREEN__RESTORE_NOTIFICATION_SUCCESS,
  TRASH_BIN_SCREEN__REMOVE_FOREVER_NOTIFICATION_SUCCESS,
} from '../../translations/resources/constants';
import classNames from 'classnames';
import FlagIcon, {FLAG_ICON_TYPE} from '../../components/FlagIcon';
import Hr from '../../ui/Hr';

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

  if (!length(data)) {
    return (
      <ScreenContainer className="justify-center">
        <ScreenHeader
          title={t(TRASH_BIN_SCREEN__TITLE)}
          description={t(TRASH_BIN_SCREEN__DESCRIPTION)}
        />
        <EmptyContent>
          {t(TRASH_BIN_SCREEN__EMPTY_DESCRIPTION)}
        </EmptyContent>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScreenHeader
        title={t(TRASH_BIN_SCREEN__TITLE)}
        description={t(TRASH_BIN_SCREEN__DESCRIPTION)}
      />
      <ScrollContainer>
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
                  <IconButton variant="outlined" size="sm" onClick={handleRestore(wordPair)}>
                    <RefreshSvg />
                  </IconButton>
                  <IconButton size="sm" onClick={handleOnRemove(wordPair)}>
                    <TrashForeverSvg />
                  </IconButton>
                </div>
              </div>
            ), reverse(data))}
          </div>
        </div>
      </ScrollContainer>
    </ScreenContainer>
  )
}

export default TrashBinScreen;
