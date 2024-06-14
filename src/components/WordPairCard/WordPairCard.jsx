import { Card } from '../../ui/Card';
import { cn } from '../../lib/utils';

function WordPairCard({ children, className, ...props }) {
  return (
    <Card {...props} className={cn('w-full p-3.5', className)}>
      {children}
    </Card>
  );
}

export default WordPairCard;
