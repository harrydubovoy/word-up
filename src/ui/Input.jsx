import { forwardRef } from 'react';

import { cn } from '../lib/utils';

const Input = forwardRef(({ className, type, ...props }, ref) => ((
  <input
    {...props}
    type={type}
    className={cn(
      'flex',
      'py-2 px-3',
      'h-10 w-full',
      'rounded-md border border-primary/20',
      'bg-secondary/90',
      'placeholder:text-primary/50',
      'ring-offset-secondary',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      className,
    )}
    ref={ref}
  />
)));
Input.displayName = 'Input';

export { Input };
