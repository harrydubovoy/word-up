import { forwardRef } from 'react';
import { Button as ButtonCore } from '@material-tailwind/react';
import classNames from 'classnames';

export const Button = forwardRef(({ children, className, ...restProps }, ref) => (
  <ButtonCore
    {...restProps}
    ref={ref}
    className={classNames('rounded-full', className)}
  >
    {children}
  </ButtonCore>
));

Button.displayName = 'Button';
