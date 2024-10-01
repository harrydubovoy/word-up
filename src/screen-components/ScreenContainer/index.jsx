import { cn } from '../../lib/utils';

import { Box } from '../../ui/Box';

import ScreenContent from '../ScreenContent';

function ScreenContainer({ children, className }) {
  return (
    <Box className={cn('h-full rounded-lg border border-primary/20 overflow-hidden', className)}>
      <ScreenContent>
        {children}
      </ScreenContent>
    </Box>
  );
}

export default ScreenContainer;
