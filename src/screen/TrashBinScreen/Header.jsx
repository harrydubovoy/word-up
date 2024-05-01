import Typography from '../../ui/Typography';
import ScreenHeader from '../../screen-components/ScreenHeader';

import {
  TRASH_BIN_SCREEN__DESCRIPTION,
  TRASH_BIN_SCREEN__TITLE,
} from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

const Header = () => {
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <div className="flex justify-between gap-2">
        <div>
          <Typography variant="h5">{t(TRASH_BIN_SCREEN__TITLE)}</Typography>
          <Typography variant="small">
            {t(TRASH_BIN_SCREEN__DESCRIPTION)}
          </Typography>
        </div>
      </div>
    </ScreenHeader>
  )
}

export default Header;
