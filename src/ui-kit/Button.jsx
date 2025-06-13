import {buttonBaseClasses} from "@mui/material";

export const Button = ({ children, variant, border, size, ...restProps }) => (
    <button box-={border} size-={} variant={variant} {...restProps}>{children}</button>
)
