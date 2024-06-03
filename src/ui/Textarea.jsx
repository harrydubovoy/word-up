import { forwardRef } from 'react';
import { Textarea as TextareaCore } from '@material-tailwind/react';
import classNames from 'classnames';

export const Textarea = forwardRef(({ className, ...restProps }, ref) => (
  <TextareaCore {...restProps} ref={ref} className={classNames('bg-white', className)} />));

Textarea.displayName = 'Textarea';
