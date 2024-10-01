import { forwardRef } from 'react';

import { cn } from '../lib/utils';

const Textarea = forwardRef(({ className, ...props }, ref) => (
  (
    <textarea
      className={cn(
        'flex',
        'min-h-[80px] w-full',
        'px-3 py-2',
        'rounded-md border border-primary/20',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'bg-secondary/70',
        'ring-offset-secondary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2s',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
));
Textarea.displayName = 'Textarea';

export { Textarea };
