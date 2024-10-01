import { forwardRef } from 'react';
import { cn, cva } from '../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center bg-primary/10 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent',
        secondary: 'border-transparent',
        outline: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Badge = forwardRef(({
  children,
  className,
  variant,
  ...props
}, ref) => (
  <span {...props} ref={ref} className={cn(badgeVariants({ variant }), className)}>
    {children}
  </span>
));
Badge.displayName = 'Badge';

export { Badge };
