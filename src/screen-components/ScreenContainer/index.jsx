import React from 'react';
import classNames from 'classnames';

import Card from '../../ui/Card';

import Container from '../../ui/Container';
import ScreenContent from '../ScreenContent';

import Alert from '../../components/Alert';

const ScreenContainer = ({ children, className }) => (
  <Card
    shadow={false}
    className={classNames('h-full', 'py-4', 'shadow-xl', 'shadow-blue-gray-900/5', className)}
  >
    <Container className="h-full">
      <ScreenContent>
        <Alert />
        {children}
      </ScreenContent>
    </Container>
  </Card>
)

export default ScreenContainer;
