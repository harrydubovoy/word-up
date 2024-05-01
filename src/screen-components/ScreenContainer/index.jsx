import classNames from 'classnames';

import Card from '../../ui/Card';

import ScreenContent from '../ScreenContent';

import Alert from '../../components/Alert';

const ScreenContainer = ({ children, className }) => (
  <Card
    shadow={false}
    className={classNames('h-full', 'shadow-xl', 'shadow-blue-gray-900/5', className)}
  >
    <ScreenContent>
      <Alert />
      {children}
    </ScreenContent>
  </Card>
)

export default ScreenContainer;
