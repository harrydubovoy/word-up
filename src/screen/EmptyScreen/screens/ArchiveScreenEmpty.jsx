import ArchiveSvg from '@material-design-icons/svg/outlined/archive.svg';

import { Box } from '../../../ui/Box';
import { Typography } from '../../../ui/Typography';

export function ArchiveScreenEmpty() {
  return (
    <>
      <Box className="flex justify-center">
        <ArchiveSvg width="84" height="84" />
      </Box>
      <Typography variant="h4" className="text-center">
        Archive is empty
      </Typography>
    </>
  );
}
