import { forwardRef } from 'react';
import { Input as InputCore } from '@material-tailwind/react';
import classNames from 'classnames';

export const Input = forwardRef(({ className, ...restProps }, ref) => (
  <InputCore {...restProps} className={classNames('bg-white', className)} ref={ref} />
));

Input.displayName = 'Input';
