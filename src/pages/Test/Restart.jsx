import { useEffect } from 'react';
import { LayoutBox } from '../../ui-kit/LayoutBox';

import { Button } from '../../ui-kit/Button';
import { Typography } from '../../ui-kit/Typography';
import { Box } from '../../ui-kit/Box';

import { setTestDoneDateTime, getDateTime } from '../../shared/utils/dateTime';

export function Restart({ onRestart }) {
  useEffect(() => {
    setTestDoneDateTime(getDateTime());
  }, []);

  return (
    <Box sx={{ display: 'grid', gap: '16px' }}>
      <Typography variant="h1">
        Would you like to try again?
      </Typography>
      <LayoutBox sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          fullWidth
          onClick={onRestart}
        >
          Yes, I would
        </Button>
      </LayoutBox>
    </Box>
  );
}
