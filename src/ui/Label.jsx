import { forwardRef } from 'react';

import { cn } from '../lib/utils';

const Label = forwardRef(({ children, htmlFor, className, ...props }, ref) => (
  <label
    {...props}
    ref={ref}
    htmlFor={htmlFor}
    className={cn(
      'text-sm font-medium text-slate-600 dark:text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
  >
    {children}
  </label>
));
Label.displayName = 'Label';

export { Label };
