import { cn } from '../../lib/utils';

import { Card } from '../../ui/Card';

import ScreenContent from '../ScreenContent';

function ScreenContainer({ children, className }) {
  return (
    <Card className={cn('h-full overflow-hidden', className)}>
      <ScreenContent>
        {children}
      </ScreenContent>
    </Card>
  );
}

export default ScreenContainer;
