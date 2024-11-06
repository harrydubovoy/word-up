import { forwardRef } from 'react';
import { join } from 'ramda';

import { cn } from '../../lib/utils';

import { isTextareaFieldType, addContentSizing } from './utils';

const textFieldRoot = join(' ', [
  'relative block w-full',
  'bg-neutral/5',
  'px-5 pt-7',
  'min-h-[56px]',
  'cursor-text',
  'rounded-t-md',
  'border-b-2 border-neutral/50',
  'text-primary text-opacity-87',

  'hover:border-brand',
  // 'focus-within:after:scale-x-1',
  'focus-within:after:bg-brand',

  'after:content[""]',
  'after:absolute',
  'after:top-full',
  'after:left-0',
  'after:bg-primary',
  'after:h-[3px]',
  'after:w-full',
  'after:transition',
  'after:bg-transparent',
  // 'after:origin-center-bottom',
  // 'after:scale-x-0',
]);

const textFieldControl = join(' ', [
  'peer',
  'resize-none',
  'w-full',
  'min-h-[24px]',
  'focus:outline-none',
  'bg-transparent',
  'placeholder-transparent',
]);

const textFieldLabelText = join(' ', [
  'absolute left-0 top-2',
  'px-5',
  'text-primary/80 text-xs',
  'transform transition-all duration-200',
  'translate-y-0',
  'pointer-events-none',

  'peer-placeholder-shown:text-base',
  'peer-placeholder-shown:font-medium',
  'peer-placeholder-shown:top-1/2',
  'peer-placeholder-shown:-translate-y-1/2',

  'peer-focus:text-primary',
  'peer-focus:font-normal',
  'peer-focus:top-2',
  'peer-focus:translate-y-0',
  'peer-focus:text-xs',
]);

export const TextFieldFilled = forwardRef(({ placeholder = ' ', label, id, type = 'text', className, ...props }, ref) => {
  const TextField = isTextareaFieldType(type) ? 'textarea' : 'input';

  return (
    <label
      htmlFor={id}
      className={cn(textFieldRoot, className)}
    >
      <TextField
        {...props}
        id={id}
        ref={ref}
        className={cn(textFieldControl, addContentSizing(type))}
        placeholder={placeholder}
      />
      <span className={cn(textFieldLabelText)}>
        {label}
      </span>
    </label>
  );
});
TextFieldFilled.displayName = 'TextFieldFilled';
