import { forwardRef } from 'react';
import { join } from 'ramda';

import { cn } from '../../lib/utils';
import { isTextareaFieldType, addContentSizing } from './utils';

const textFieldRoot = join(' ', [
  'relative flex items-center w-full',
  'bg-transparent',
  'px-5',
  'min-h-[56px]',
  'rounded-md',
  'border border-neutral/50',
  'text-primary text-opacity-87',
  'cursor-text',

  'hover:border-brand',
  'focus-within:border-2',
  'focus-within:border-brand',
]);

const textFieldControl = join(' ', [
  'resize-none',
  'peer',
  'w-full',
  'min-h-[24px]',
  'focus:outline-none',
  'bg-transparent',
  'placeholder-transparent',
]);

const textFieldLabelText = join(' ', [
  'absolute left-3 -top-2',
  'px-2',
  'text-primary/80 text-xs',
  'transform transition-all duration-200',
  'translate-y-0',
  'pointer-events-none',
  'bg-secondary',

  'peer-placeholder-shown:text-base',
  'peer-placeholder-shown:bg-transparent',
  'peer-placeholder-shown:top-1/2',
  'peer-placeholder-shown:-translate-y-1/2',

  'peer-focus:text-brand',
  'peer-focus:-top-2',
  'peer-focus:translate-y-0',
  'peer-focus:text-xs',
  'peer-focus:bg-secondary',
]);

export const TextFieldOutlined = forwardRef(({
  placeholder = ' ',
  label,
  id,
  type = 'text',
  className,
  ...props
}, ref) => {
  const TextField = isTextareaFieldType(type) ? 'textarea' : 'input';

  return (
    <label
      htmlFor={id}
      className={cn(textFieldRoot, className)}
    >
      <TextField
        {...props}
        ref={ref}
        id={id}
        className={cn(textFieldControl, addContentSizing(type))}
        placeholder={placeholder}
      />
      <span className={cn(textFieldLabelText)}>
        {label}
      </span>
    </label>
  );
});
TextFieldOutlined.displayName = 'TextFieldOutlined';
