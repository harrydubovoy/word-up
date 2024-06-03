import classNames from 'classnames';

import { Container } from '../../ui/Container';

function ScreenBody({ children, className }) {
  return (
    <div className={classNames('py-6 min-h-full', className)}>
      <Container>
        {children}
      </Container>
    </div>
  );
}

export default ScreenBody;
