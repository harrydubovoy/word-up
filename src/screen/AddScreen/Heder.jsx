import { Typography } from '../../ui/Typography';
import ScreenHeader from '../../screen-components/ScreenHeader';

import { ADD_WORD_SCREEN__TITLE } from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

function Header() {
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <Typography htmltag="h1" variant="h4">{t(ADD_WORD_SCREEN__TITLE)}</Typography>
    </ScreenHeader>
  );
}

export default Header;
