export function Badge({ children, variant, cap }) {
  return <span is-="badge" variant-={variant} cap-={cap}>{children}</span>;
}
