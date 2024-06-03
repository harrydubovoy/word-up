import { Typography } from '../../ui/Typography';
import { IconButton } from '../../ui/IconButton';
import ScreenHeader from '../../screen-components/ScreenHeader';
import FlagIcon from '../../components/FlagIcon';

import { TEST_SCREEN__TITLE } from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

import { mapWordKeyToFlagIcon } from '../../utils/icon';

function Header({ isTestStarted, wordKeyType, onReverseTest, totalTestPlan }) {
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <div className="flex items-center justify-between gap-2">
        <div>
          <Typography variant="h5">{t(TEST_SCREEN__TITLE)}</Typography>
        </div>
        <div>
          <IconButton
            variant="outlined"
            disabled={isTestStarted || !totalTestPlan}
            onClick={onReverseTest}
          >
            <FlagIcon type={mapWordKeyToFlagIcon(wordKeyType)} />
          </IconButton>
        </div>
      </div>
    </ScreenHeader>
  );
}

export default Header;
