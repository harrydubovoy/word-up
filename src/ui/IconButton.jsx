import { IconButton as IconButtonCore } from '@material-tailwind/react';

function IconButton({ children, ...restProps }) {
  return (
    <IconButtonCore {...restProps}>
      {children}
    </IconButtonCore>
  );
}

export default IconButton;
