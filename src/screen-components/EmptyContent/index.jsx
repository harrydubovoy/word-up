import React from 'react';

import Typography from '../../ui/Typography';

const EmptyContent = ({ children }) => (
  <div className="flex flex-col justify-center h-full">
    <div className="flex justify-center">
      <img style={{ maxWidth: '38vh' }} src="/images/no-data.jpg" alt="No data"/>
    </div>
    <Typography className="mb-4 text-center">
      {children}
    </Typography>
  </div>
)

export default EmptyContent;
