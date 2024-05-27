import { Typography } from '../../ui/Typography';
import ScreenHeader from '../../screen-components/ScreenHeader';

function Header() {
  return (
    <ScreenHeader>
      <div className="flex justify-between gap-2">
        <div>
          <Typography variant="h5">Edit word</Typography>
        </div>
      </div>
    </ScreenHeader>
  );
}

export default Header;
