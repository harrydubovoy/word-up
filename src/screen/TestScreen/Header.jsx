import SyncSvg from '@material-design-icons/svg/outlined/sync.svg';

import { Typography } from '../../ui/Typography';
import { ButtonIcon } from '../../ui/Button';
import { Box } from '../../ui/Box';
import ScreenHeader from '../../screen-components/ScreenHeader';

import { TEST_SCREEN__TITLE } from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

function Header({ isTestStarted, onReverseTest, totalTestPlan }) {
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <Box className="flex items-center justify-between gap-2">
        <Box>
          <Typography htmltag="h1" variant="h4">{t(TEST_SCREEN__TITLE)}</Typography>
        </Box>
        <Box>
          <ButtonIcon
            variant="outlined"
            disabled={isTestStarted || !totalTestPlan}
            onClick={onReverseTest}
          >
            <SyncSvg />
          </ButtonIcon>
        </Box>
      </Box>
    </ScreenHeader>
  );
}

export default Header;
