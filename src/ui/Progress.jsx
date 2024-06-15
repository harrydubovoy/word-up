import * as React from 'react';

import { cn } from '../lib/utils';

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div {...props} ref={ref} className={cn('w-full bg-slate-200 rounded-full h-2 dark:bg-slate-900', className)}>
    <div className="bg-slate-900 dark:bg-slate-200 h-2 rounded-full" style={{ width: `${value}%` }} />
  </div>
));
Progress.displayName = 'Progress';

export { Progress };
