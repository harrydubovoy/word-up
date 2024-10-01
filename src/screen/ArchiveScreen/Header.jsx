import { Typography } from '../../ui/Typography';
import ScreenHeader from '../../screen-components/ScreenHeader';
import { Description } from '../../components/Description';

import { selectTotalArchive } from '../../store/reducer/archive.slice';
import { useAppSelector } from '../../store/hooks';

import {
  TRASH_BIN_SCREEN__DESCRIPTION,
  TRASH_BIN_SCREEN__TITLE,
} from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

function Header() {
  const totalTrashBin = useAppSelector(selectTotalArchive);
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <Typography htmltag="h1" variant="h4">{t(TRASH_BIN_SCREEN__TITLE)}</Typography>
      <Description>
        {t(TRASH_BIN_SCREEN__DESCRIPTION, { totalTrashBin })}
      </Description>
    </ScreenHeader>
  );
}

export default Header;
