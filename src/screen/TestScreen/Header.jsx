import { Typography } from '../../ui/Typography';
import IconButton from '../../ui/IconButton';
import ScreenHeader from '../../screen-components/ScreenHeader';
import FlagIcon from '../../components/FlagIcon';

import { TEST_SCREEN__TITLE } from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

import { FLAG_ICON_TYPE } from '../../constants/icons';

function Header({ isTestStarted, isTestReversed, onReverseTest, totalTestPlan }) {
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <div className="flex items-center justify-between gap-2">
        <div>
          <Typography variant="h5">{t(TEST_SCREEN__TITLE)}</Typography>
        </div>
        <div>
          <IconButton
            variant="text"
            disabled={isTestStarted || !totalTestPlan}
            onClick={onReverseTest}
          >
            <FlagIcon type={isTestReversed ? FLAG_ICON_TYPE.UA : FLAG_ICON_TYPE.ENG} />
          </IconButton>
        </div>
      </div>
    </ScreenHeader>
  );
}

export default Header;
