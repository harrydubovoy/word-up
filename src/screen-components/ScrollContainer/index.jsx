import { cn } from '../../lib/utils';

import { Box } from '../../ui/Box';

function ScrollContainer({ children, className }) {
  return (
    <Box className={cn('overflow-y-auto h-full', className)}>
      {children}
    </Box>
  );
}

export default ScrollContainer;
