import { useEffect } from 'react';

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
      <Typography variant="h5" textAlign="center">
        Would you like to try again?
      </Typography>
      <Box className="mt-6">
        <Button
          variant="contained"
          fullWidth
          onClick={onRestart}
        >
          Yes, I would
        </Button>
      </Box>
    </Box>
  );
}
