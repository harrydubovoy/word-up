import { Alert as AlertCore } from "@material-tailwind/react";

const Alert = ({ children, ...restProps }) => {
  if (!children) {
    return null;
  }

  return <AlertCore {...restProps}>{children}</AlertCore>
};

export default Alert;
