export function Progress({ value, ...props }) {
  return (
    <div className="progress-bar" {...props}>
      <div className="progress-bar-filled" style={{ width: `${value}%` }} />
    </div>
  );
}
Progress.displayName = 'Progress';
