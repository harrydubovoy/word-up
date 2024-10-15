import { Typography } from '../ui/Typography';
import { cn } from '../lib/utils';

export function Description({ children, className }) {
  return (
    <Typography variant="small" className={cn('opacity-75', className)}>
      {children}
    </Typography>
  );
}
