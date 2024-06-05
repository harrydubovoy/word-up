import { Typography } from '../../../ui/Typography';
import EmptySvg from '../../../icons/EmptySvg';

function TrashBinScreenEmpty() {
  return (
    <>
      <div className="flex justify-center">
        <EmptySvg />
      </div>
      <Typography variant="h4" className="text-center">
        No trashed words
      </Typography>
    </>
  );
}

export default TrashBinScreenEmpty;
