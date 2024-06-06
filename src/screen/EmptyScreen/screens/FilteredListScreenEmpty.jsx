import EmptySvg from '../../../icons/EmptySvg';
import { Typography } from '../../../ui/Typography';

function ListScreenEmpty() {
  return (
    <>
      <div className="flex justify-center">
        <EmptySvg />
      </div>
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
