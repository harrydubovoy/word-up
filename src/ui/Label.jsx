import { forwardRef } from 'react';

import { cn, cva } from '../lib/utils';

const labelVariants = cva(
  'text-xs font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

const Label = forwardRef(({ children, htmlFor, className, ...props }, ref) => (
  <label ref={ref} htmlFor={htmlFor} className={cn(labelVariants(), className)} {...props}>
    {children}
  </label>
));
Label.displayName = 'Label';

export { Label };
