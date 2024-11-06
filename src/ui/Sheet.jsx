import { join } from 'ramda';

import { cn } from '../lib/utils';

const sheetRoot = join(' ', [
  'absolute',
  'top-0 bottom-0 right-0 left-0',
  'z-10',
  'flex flex-col justify-end',
]);

const sheetBackdrop = join(' ', [
  'absolute',
  'bg-primary/30',
  'top-0',
  'bottom-0',
  'left-0',
  'right-0',
]);

const sheetBody = join(' ', [
  'rounded-t-2xl',
  'py-8',
  'bg-secondary',
  'z-20',
]);

export function Sheet({ children, onClose }) {
  return (
    <div className={cn(sheetRoot)}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div onClick={onClose} className={cn(sheetBackdrop)} />
      <div className={cn(sheetBody)}>
        {children}
      </div>
    </div>
  );
}
