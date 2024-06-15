import { CardFooter } from '../../ui/Card';
import { cn } from '../../lib/utils';

function WordPairCardFooter({ children, className, ...props }) {
  return (
    <CardFooter {...props} className={cn('p-0', className)}>
      {children}
    </CardFooter>
  );
}

export default WordPairCardFooter;
