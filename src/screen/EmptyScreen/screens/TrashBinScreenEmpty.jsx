import { Typography } from '../../../ui/Typography';
import { Box } from '../../../ui/Box';
import EmptySvg from '../../../icons/EmptySvg';

function TrashBinScreenEmpty() {
  return (
    <>
      <Box className="flex justify-center">
        <EmptySvg />
      </Box>
      <Typography variant="h4" className="text-center">
        No trashed words
      </Typography>
    </>
  );
}

export default TrashBinScreenEmpty;
