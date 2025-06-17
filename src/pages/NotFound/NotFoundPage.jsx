import { useNavigate } from 'react-router-dom';

import { LayoutBox } from '../../ui-kit/LayoutBox';
import { Typography } from '../../ui-kit/Typography';
import { Button } from '../../ui-kit/Button';

export function NotFoundPage() {
  const navigate = useNavigate();

  const handleOnClickGoHome = () => {
    navigate('/');
  };

  return (
    <LayoutBox sx={{ display: 'grid', gap: '4px' }}>
      <Typography variant="h1">
        You got lost
      </Typography>
      <Typography variant="p">
        The page you wear looking for does not exist
      </Typography>
      <LayoutBox>
        <Button onClick={handleOnClickGoHome}>Go home</Button>
      </LayoutBox>
    </LayoutBox>
  );
}
