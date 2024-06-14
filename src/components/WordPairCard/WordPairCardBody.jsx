import { CardContent } from '../../ui/Card';
import { cn } from '../../lib/utils';

function WordPairCardBody({ children, className, ...props }) {
  return (
    <CardContent {...props} className={cn('p-0', className)}>
      {children}
    </CardContent>
  );
}

export default WordPairCardBody;
