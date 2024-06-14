import { cn } from '../../lib/utils';

import { Box } from '../../ui/Box';

function ScreenContent({ children, className }) {
  return (
    <Box className={cn('flex flex-col relative h-full max-h-full', className)}>
      {children}
    </Box>
  );
}

export default ScreenContent;
