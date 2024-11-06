import { forwardRef } from 'react';
import { join } from 'ramda';

import { cn, cva } from '../lib/utils';

const variants = {
  variant: {
    filled: [
      'bg-brand',
      'text-white',
      'transition-shadow',
      'elevation-1',
      'disabled:elevation-1',
      'hover:elevation-2 focus:elevation-1 active:elevation-1',
    ],
    outlined: [
      'text-brand',
      'border border-brand',
    ],
    text: [
      'text-brand',
    ],
    elevated: [
      'text-brand',
      'transition-shadow',
      'elevation-1',
      'disabled:elevation-1 disabled:opacity-50',
      'hover:elevation-2 focus:elevation-1 active:elevation-1',
    ],
    tonal: [
      'bg-brand/80',
      'text-white',
    ],
  },
};

const button = cva(
  join(' ', [
    'relative',
    'inline-flex items-center justify-center center gap-2',
    'px-4',
    'min-w-[64px] min-h-[40px]',
    'rounded-full',
    'outline-0',
    'text-center uppercase font-medium',
    'cursor-pointer',
    'ripple',
    'disabled:cursor-default disabled:opacity-50',
  ]),
  { variants },
);

const buttonIcon = cva(
  join(' ', [
    'relative',
    'outline-0',
    'inline-flex items-center justify-center',
    'min-w-[40px] min-h-[40px]',
    'rounded-full',
    'text-center uppercase font-medium',
    'cursor-pointer',
    'ripple',
    'disabled:cursor-default disabled:opacity-50',
  ]),
  { variants },
);

const Button = forwardRef(({ children, className, variant, type = 'button', ...props }, ref) => (
  (
    <button
      {...props}
      type={type}
      className={cn(button({ variant, className }))}
      ref={ref}
    >
      {children}
    </button>
  )
));
Button.displayName = 'Button';

const ButtonIcon = forwardRef(({ children, className, variant, type = 'button', ...props }, ref) => (
  (
    <button
      {...props}
      type={type}
      className={cn(buttonIcon({ variant, className }))}
      ref={ref}
    >
      {children}
    </button>
  )
));
ButtonIcon.displayName = 'ButtonIcon';

export { Button, ButtonIcon };
