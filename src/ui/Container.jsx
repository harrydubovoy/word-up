import { forwardRef } from 'react';
import classNames from 'classnames';

export const Container = forwardRef(({ children, className }, ref) => (
  <div ref={ref} className={classNames('px-4', className)}>
    {children}
  </div>
));

Container.displayName = 'Container';
