import * as React from 'react';

import { cn, cva } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-secondary active:bg-primary/90 hover:bg-primary/80',
        outline: 'border bg-secondary border-primary/50 hover:bg-primary/10 active:bg-primary/20',
        secondary:
          'bg-primary/5 hover:bg-primary/10',
        ghost: 'hover:bg-primary/5',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ className, variant, type, size, ...props }, ref) => (
  (
    <button
      {...props}
      type={type ?? 'button'}
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
    />
  )
));
Button.displayName = 'Button';

export { Button };
