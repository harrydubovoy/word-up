import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Progress = React.forwardRef(({ value, ...props }, ref) => (
  <LinearProgress variant="determinate" ref={ref} value={value} {...props} />
));
Progress.displayName = 'Progress';

export { Progress };
