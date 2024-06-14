import { forwardRef } from 'react';

const Box = forwardRef(({ children, className, ...props }, ref) => (
  <div {...props} className={className} ref={ref}>{children}</div>
));
Box.displayName = 'Box';

export { Box };
