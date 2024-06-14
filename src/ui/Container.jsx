import { forwardRef } from 'react';
import { cn } from '../lib/utils';

const Container = forwardRef(({ children, className }, ref) => (
  <div ref={ref} className={cn('px-4', className)}>
    {children}
  </div>
));
Container.displayName = 'Container';

export { Container };
