export function Button({ children, variant, border, size, ...restProps }) {
  return <button box-={border} size-={size} variant-={variant} {...restProps}>{children}</button>;
}

export const ButtonIcon = Button;
