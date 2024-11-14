import { forwardRef } from 'react';

const Box = forwardRef(({ children, className, htmltag, ...props }, ref) => {
  const Component = htmltag ?? 'div';

  return (
    <Component {...props} className={className} ref={ref}>{children}</Component>
  );
});
Box.displayName = 'Box';

export { Box };
