import classNames from 'classnames';

import { Card, CardBody } from '../../ui/Card';
import { Typography } from '../../ui/Typography';

function QuestionWord({ children, className }) {
  return (
    <Card className={classNames(className, 'bg-jet-stream')}>
      <CardBody>
        <Typography className="text-xl font-bold text-lunar-green text-center">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default QuestionWord;
