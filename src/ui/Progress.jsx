import * as React from 'react';

import { cn } from '../lib/utils';

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div {...props} ref={ref} className={cn('w-full h-2', 'rounded-full', 'bg-neutral/20', className)}>
    <div className={cn('bg-brand', 'h-2', 'rounded-full')} style={{ width: `${value}%` }} />
  </div>
));
Progress.displayName = 'Progress';

export { Progress };
