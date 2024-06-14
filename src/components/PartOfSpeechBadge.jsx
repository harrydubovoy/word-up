import { Badge } from '../ui/Badge';
import { cn } from '../lib/utils';

export function PartOfSpeechBadge({ children, className }) {
  return (
    <Badge
      variant="secondary"
      className={cn('rounded-full lowercase', className)}
      value={children}
    >
      {children}
    </Badge>
  );
}
