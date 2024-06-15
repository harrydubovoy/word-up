import { Typography } from '../../ui/Typography';
import { Button } from '../../ui/Button';
import { Box } from '../../ui/Box';
import ScreenHeader from '../../screen-components/ScreenHeader';
import FlagIcon from '../../components/FlagIcon';

import { TEST_SCREEN__TITLE } from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

import { mapWordKeyToFlagIcon } from '../../utils/icon';

function Header({ isTestStarted, wordKeyType, onReverseTest, totalTestPlan }) {
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <Box className="flex items-center justify-between gap-2">
        <Box>
          <Typography htmltag="h1" variant="h4">{t(TEST_SCREEN__TITLE)}</Typography>
        </Box>
        <Box>
          <Button
            type="button"
            size="icon"
            variant="outline"
            disabled={isTestStarted || !totalTestPlan}
            onClick={onReverseTest}
          >
            <FlagIcon type={mapWordKeyToFlagIcon(wordKeyType)} />
          </Button>
        </Box>
      </Box>
    </ScreenHeader>
  );
}

export default Header;
