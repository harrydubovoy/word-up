import { IconButton as IconButtonCore } from '@material-tailwind/react';

const IconButton = ({ children, ...restProps }) => (
  <IconButtonCore {...restProps}>
    {children}
  </IconButtonCore>
);

export default IconButton;
