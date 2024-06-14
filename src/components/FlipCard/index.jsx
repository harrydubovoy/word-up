import { cn } from '../../lib/utils';

import { Box } from '../../ui/Box';

function FlipCard({ className, isToggled, renderFront, renderBack }) {
  return (
    <Box className={cn('group relative w-full perspective-1000', className)}>
      <Box className={cn('relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d', {
        'rotate-y-180': isToggled,
      })}
      >
        {renderFront({ frontClassName: 'absolute w-full h-full backface-hidden' })}
        {renderBack({ backClassName: 'absolute w-full h-full transform rotate-y-180 backface-hidden' })}
      </Box>
    </Box>
  );
}

export { FlipCard };
