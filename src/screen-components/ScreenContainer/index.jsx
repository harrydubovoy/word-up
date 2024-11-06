import { cn } from '../../lib/utils';

import { Box } from '../../ui/Box';

import ScreenContent from '../ScreenContent';

export function ScreenContainer({ children, className }) {
  return (
    <Box className={cn('h-full md:rounded-lg md:border border-primary/20 overflow-hidden', className)}>
      <ScreenContent>
        {children}
      </ScreenContent>
    </Box>
  );
}
