import { useNavigate } from 'react-router-dom';

import EmptySvg from '../../../icons/EmptySvg';
import { Typography } from '../../../ui/Typography';
import { Button } from '../../../ui/Button';

function ListScreenEmpty() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center">
        <EmptySvg />
      </div>
      <Typography variant="h4" className="text-center">
        No words at your dictionary
      </Typography>
      <Typography>
        Go to add page for adding one
      </Typography>
      <div className="mt-4">
        <Button onClick={() => navigate('/add')}>
          Add new word
        </Button>
      </div>
    </>
  );
}

export default ListScreenEmpty;
