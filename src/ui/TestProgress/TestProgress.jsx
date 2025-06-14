import MuiBox from '@mui/material/Box';

import { Progress } from '../../ui-kit/Progress';

import { getProgress } from './utils';

export function TestProgress({ cursor, totalTestPlan }) {
  return (
    <MuiBox sx={{ display: 'grid', gap: '4px' }}>
      <Progress value={getProgress(totalTestPlan, cursor)} />
      <MuiBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MuiBox>
          Completed
        </MuiBox>
        <MuiBox>
          {cursor}
          /
          {totalTestPlan}
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
}
