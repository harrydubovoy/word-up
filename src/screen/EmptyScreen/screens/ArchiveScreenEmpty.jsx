import { Archive } from 'lucide-react';

import { Box } from '../../../ui/Box';
import { Typography } from '../../../ui/Typography';

export function ArchiveScreenEmpty() {
  return (
    <>
      <Box className="flex justify-center">
        <Archive size={100} />
      </Box>
      <Typography variant="h4" className="text-center">
        Archive is empty
      </Typography>
    </>
  );
}
