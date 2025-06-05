import { useNavigate } from 'react-router-dom';

import { Typography } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';
import { Box } from '../../ui-kit/Box';

export function NotFoundPage() {
  const navigate = useNavigate();

  const handleOnClickGoHome = () => {
    navigate('/');
  };

  return (
    <Box className="flex flex-col justify-center items-center h-full w-full">
      <Typography variant="h4" className="text-center">
        You got lost
      </Typography>
      <Typography variant="body1">
        The page you wear looking for does not exist
      </Typography>
      <Box className="mt-8">
        <Button variant="contained" onClick={handleOnClickGoHome}>Go home</Button>
      </Box>
    </Box>
  );
}