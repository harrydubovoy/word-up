import EmptySvg from '../../../icons/EmptySvg';
import { Typography } from '../../../ui/Typography';
import { Box } from '../../../ui/Box';

function ListScreenEmpty() {
  return (
    <>
      <Box className="flex justify-center">
        <EmptySvg />
      </Box>
      <Typography variant="h4" className="text-center">
        Nothing to show
      </Typography>
      <Typography>
        Change your search or filter values
      </Typography>
    </>
  );
}

export default ListScreenEmpty;
