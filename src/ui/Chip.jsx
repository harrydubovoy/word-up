import { Chip as ChipCore } from '@material-tailwind/react';
import { forwardRef } from 'react';

export const Chip = forwardRef((props, ref) => (
  <ChipCore ref={ref} {...props} />
));

Chip.displayName = 'Chip';
