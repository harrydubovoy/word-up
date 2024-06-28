import { forwardRef } from 'react';

const Form = forwardRef(({ children, ...props }, ref) => (
  <form {...props} noValidate ref={ref}>
    {children}
  </form>
));
Form.displayName = 'Form';

export { Form };
