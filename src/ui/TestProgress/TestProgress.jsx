import { LayoutBox } from '../../ui-kit/LayoutBox';
import { Progress } from '../../ui-kit/Progress';

import { getProgress } from './utils';

export function TestProgress({ cursor, totalTestPlan }) {
  return (
    <LayoutBox sx={{ display: 'grid', gap: '4px' }}>
      <Progress value={getProgress(totalTestPlan, cursor)} />
      <LayoutBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LayoutBox>
          Completed
        </LayoutBox>
        <LayoutBox>
          {cursor}
          /
          {totalTestPlan}
        </LayoutBox>
      </LayoutBox>
    </LayoutBox>
  );
}
