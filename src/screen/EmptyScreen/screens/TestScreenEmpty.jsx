import { useNavigate } from 'react-router-dom';

import EmptySvg from '../../../icons/EmptySvg';
import { Typography } from '../../../ui/Typography';
import { Button } from '../../../ui/Button';

function TestScreenEmpty() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center">
        <EmptySvg />
      </div>
      <Typography className="text-center">
        No words for testing
        <br />
        Go to add screen for adding one
      </Typography>
      <div className="mt-4">
        <Button onClick={() => navigate('/add')}>
          Add new word
        </Button>
      </div>
    </>
  );
}

export default TestScreenEmpty;
