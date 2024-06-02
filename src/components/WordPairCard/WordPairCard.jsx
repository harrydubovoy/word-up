import classNames from 'classnames';
import { Card } from '../../ui/Card';

function WordPairCard({ children, className, ...restProps }) {
  return (
    <Card className={classNames('w-full p-3.5', className)} {...restProps}>
      {children}
    </Card>
  );
}

export default WordPairCard;
