import React from 'react';

import Container from '../../ui/Container';
import Hr from '../../ui/Hr';

const ScreenHeader = ({ children }) => (
  <div className="pt-6">
    <Container>
      {children}
    </Container>
    <div className="mt-3">
      <Hr />
    </div>
  </div>
)

export default ScreenHeader;
