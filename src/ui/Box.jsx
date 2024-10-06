import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Box = forwardRef(({ children, className, ...props }, ref) => (
  <div {...props} className={className} ref={ref}>{children}</div>
));
Box.displayName = 'Box';

const MotionBox = motion.create(Box);

export { Box, MotionBox };
