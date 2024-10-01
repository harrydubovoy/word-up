import { Badge } from '../ui/Badge';
import { cn } from '../lib/utils';

export function PartOfSpeechBadge({ children, className }) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        'rounded-full',
        'lowercase',
        'bg-primary/10 dark:bg-secondary/10',
        'text-primary dark:text-secondary',
        className,
      )}
      value={children}
    >
      {children}
    </Badge>
  );
}
