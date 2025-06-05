import { Box } from '../../ui-kit/Box';
import { Progress } from '../../ui-kit/Progress';
import { Typography } from '../../ui-kit/Typography';

import { getProgress } from './utils';

export function TestProgress({ cursor, totalTestPlan }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <Progress value={getProgress(totalTestPlan, cursor)} />
      <Typography variant="body2" fontWeight="400" fontSize="12px" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px' }}>
        <Box component="span">
          Completed
        </Box>
        <Box component="span">
          {cursor}
          /
          {totalTestPlan}
        </Box>
      </Typography>
    </Box>
  );
}
