import { useEffect } from 'react';

import Button from '../../ui/Button';
import Typography from '../../ui/Typography';

import { setTestDoneDateTime, getDateTime } from '../../utils/dateTime';

import { useTranslation } from '../../translations';
import {
  TEST_SCREEN__COMPLETED_TITLE,
  TEST_SCREEN__COMPLETED_ACTION,
} from '../../translations/resources/constants';

const Restart = ({ onRestart }) => {
  const { t } = useTranslation();

  useEffect(() => {
    setTestDoneDateTime(getDateTime());
  }, [])

  return (
    <div className="text-center">
      <Typography >
        {t(TEST_SCREEN__COMPLETED_TITLE)}
      </Typography>
      <div className="mt-6">
        <Button fullWidth onClick={onRestart}>{t(TEST_SCREEN__COMPLETED_ACTION)}</Button>
      </div>
    </div>
  )
}

export default Restart;
