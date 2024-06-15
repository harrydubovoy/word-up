import { useNavigate } from 'react-router-dom';

import EmptySvg from '../../../icons/EmptySvg';
import { Typography } from '../../../ui/Typography';
import { Button } from '../../../ui/Button';
import { Box } from '../../../ui/Box';

function ListScreenEmpty() {
  const navigate = useNavigate();

  return (
    <>
      <Box className="flex justify-center">
        <EmptySvg />
      </Box>
      <Typography variant="h4" className="text-center">
        No words at your dictionary
      </Typography>
      <Typography>
        Go to add page for adding one
      </Typography>
      <Box className="mt-4">
        <Button onClick={() => navigate('/add')}>
          Add new word
        </Button>
      </Box>
    </>
  );
}

export default ListScreenEmpty;
