import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

import { Box } from '../../ui/Box';

const ScrollContainer = forwardRef(({ children, className }, ref) => (
  <Box ref={ref} className={cn('overflow-y-auto h-full', className)}>
    {children}
  </Box>
));
ScrollContainer.displayName = 'ScrollContainer';

export default ScrollContainer;
