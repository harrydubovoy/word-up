export function Typography({ children, variant }) {
  if (/h[1-6]/.test(variant)) {
    const TagH = variant;
    return (
      <TagH>{children}</TagH>
    );
  }

  if (variant === 'p') {
    return (
      <p>{children}</p>
    );
  }

  return children;
}
