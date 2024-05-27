import { forwardRef } from 'react';
import { Typography as TypographyCore } from '@material-tailwind/react';

export const Typography = forwardRef(({ children, ...restProps }, ref) => (
  <TypographyCore ref={ref} {...restProps}>{children}</TypographyCore>
));

Typography.displayName = 'Typography';
