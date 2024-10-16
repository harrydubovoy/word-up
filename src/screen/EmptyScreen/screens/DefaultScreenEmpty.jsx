import { Bird } from 'lucide-react';

import { Box } from '../../../ui/Box';
import { Typography } from '../../../ui/Typography';

export function DefaultScreenEmpty() {
  return (
    <>
      <Box className="flex justify-center">
        <Bird size={100} />
      </Box>
      <Typography variant="h4" className="text-center">
        No words yet
      </Typography>
    </>
  );
}