import EmptySvg from '../../../icons/EmptySvg';
import { Typography } from '../../../ui/Typography';

function DefaultScreenEmpty() {
  return (
    <>
      <div className="flex justify-center">
        <EmptySvg />
      </div>
      <Typography className="text-center">
        No Data
      </Typography>
    </>
  );
}

export default DefaultScreenEmpty;
