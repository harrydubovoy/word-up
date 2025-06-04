import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { cva, cn };
