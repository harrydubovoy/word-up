import { forwardRef } from 'react';
import { Alert as AlertCore } from '@material-tailwind/react';

export const Alert = forwardRef(({ children, ...restProps }, ref) => {
  if (!children) {
    return null;
  }

  return <AlertCore {...restProps} ref={ref}>{children}</AlertCore>;
});
Alert.displayName = 'Alert';

export default Alert;
