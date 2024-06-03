import { forwardRef } from 'react';
import { IconButton as IconButtonCore } from '@material-tailwind/react';
import classNames from 'classnames';

export const IconButton = forwardRef(({ children, className, ...restProps }, ref) => (
  <IconButtonCore {...restProps} className={classNames('rounded-full', className)} ref={ref}>
    {children}
  </IconButtonCore>
));
IconButton.displayName = 'IconButton';
