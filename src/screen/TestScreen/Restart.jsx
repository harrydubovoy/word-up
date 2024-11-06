import { useEffect } from 'react';

import { Button } from '../../ui/Button';
import { Typography } from '../../ui/Typography';
import { Box } from '../../ui/Box';

import { setTestDoneDateTime, getDateTime } from '../../utils/dateTime';

import { useTranslation } from '../../translations';
import {
  TEST_SCREEN__COMPLETED_TITLE,
  TEST_SCREEN__COMPLETED_ACTION,
} from '../../translations/resources/constants';

function Restart({ onRestart }) {
  const { t } = useTranslation();

  useEffect(() => {
    setTestDoneDateTime(getDateTime());
  }, []);

  return (
    <Box className="text-center">
      <Typography htmltag="h2" variant="h4">
        {t(TEST_SCREEN__COMPLETED_TITLE)}
      </Typography>
      <Box className="mt-6">
        <Button variant="filled" className="w-full" onClick={onRestart}>{t(TEST_SCREEN__COMPLETED_ACTION)}</Button>
      </Box>
    </Box>
  );
}

export default Restart;
