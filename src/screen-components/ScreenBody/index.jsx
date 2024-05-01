import React from 'react';
import classNames from 'classnames';

import Container from '../../ui/Container';

const ScreenBody = ({ children, className }) => (
  <div className={classNames('py-6 min-h-full', className )}>
    <Container>
      {children}
    </Container>
  </div>
)

export default ScreenBody;
