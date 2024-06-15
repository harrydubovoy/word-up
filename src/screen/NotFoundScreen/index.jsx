import { useNavigate } from 'react-router-dom';

import { Typography } from '../../ui/Typography';
import { Button } from '../../ui/Button';
import { Box } from '../../ui/Box';

function NotFoundScreen() {
  const navigate = useNavigate();

  const handleOnClickGoHome = () => {
    navigate('/');
  };

  return (
    <Box className="flex flex-col justify-center items-center h-full w-full">
      <Typography variant="h3" className="text-center">
        You got lost
      </Typography>
      <Typography className="mt-2">
        The page you wear looking for does not exist
      </Typography>
      <Box className="mt-8">
        <Button onClick={handleOnClickGoHome}>Go home</Button>
      </Box>
    </Box>
  );
}

export default NotFoundScreen;
