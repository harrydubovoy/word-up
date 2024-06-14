import { forwardRef } from 'react';
import { cn, cva } from '../lib/utils';

const typographyVariants = cva(
  'text-slate-800 dark:text-slate-200',
  {
    variants: {
      variant: {
        h1: 'text-4xl font-semibold',
        h2: 'text-3xl font-semibold',
        h3: 'text-2xl font-semibold',
        h4: 'text-xl font-semibold',
        h5: 'font-semibold',
        h6: 'text-sm font-semibold',
        paragraph: '',
        blockquote: 'border-l-2 pl-6 italic',
        'inline-code': 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        large: 'text-lg',
        medium: 'text-md',
        small: 'text-sm',
      },
    },
    defaultVariants: {},
  },
);

const Typography = forwardRef(({ children, htmltag, variant, className, ...props }, ref) => {
  const Component = htmltag ?? 'span';

  return (
    <Component {...props} ref={ref} className={cn(typographyVariants({ variant, className }))}>
      {children}
    </Component>
  );
});
Typography.displayName = 'Typography';

export { Typography };
