import { Typography as TypographyCore } from "@material-tailwind/react";

export const Typography = ({ children, ...restProps }) => <TypographyCore {...restProps}>{children}</TypographyCore>;

export default Typography;
