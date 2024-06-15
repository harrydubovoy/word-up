import EmptySvg from '../../../icons/EmptySvg';
import { Box } from '../../../ui/Box';
import { Typography } from '../../../ui/Typography';

function DefaultScreenEmpty() {
  return (
    <>
      <Box className="flex justify-center">
        <EmptySvg />
      </Box>
      <Typography className="text-center">
        No Data
      </Typography>
    </>
  );
}

export default DefaultScreenEmpty;
