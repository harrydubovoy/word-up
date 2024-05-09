import EmptySvg from '../../../icons/EmptySvg';
import Typography from '../../../ui/Typography';

const DefaultScreenEmpty = () => (
  <>
    <div className="flex justify-center">
      <EmptySvg />
    </div>
    <Typography className="text-center">
      No Data
    </Typography>
  </>
)

export default DefaultScreenEmpty;
