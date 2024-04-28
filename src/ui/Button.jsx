import { forwardRef } from "react";
import { Button as ButtonCore } from "@material-tailwind/react";

const Button = forwardRef(({ children, ...restProps }, ref) => (
  <ButtonCore
    ref={ref}
    {...restProps}
  >
    {children}
  </ButtonCore>
));

export default Button;
