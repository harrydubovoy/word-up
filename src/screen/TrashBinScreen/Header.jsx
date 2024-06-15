import { Typography } from '../../ui/Typography';
import ScreenHeader from '../../screen-components/ScreenHeader';

import { selectTotalTrashBin } from '../../store/reducer/trash-bin.slice';
import { useAppSelector } from '../../store/hooks';

import {
  TRASH_BIN_SCREEN__DESCRIPTION,
  TRASH_BIN_SCREEN__TITLE,
} from '../../translations/resources/constants';

import { useTranslation } from '../../translations';

function Header() {
  const totalTrashBin = useAppSelector(selectTotalTrashBin);
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <Typography htmltag="h1" variant="h4">{t(TRASH_BIN_SCREEN__TITLE)}</Typography>
      <Typography variant="small" className="text-slate-500">
        {t(TRASH_BIN_SCREEN__DESCRIPTION, { totalTrashBin })}
      </Typography>
    </ScreenHeader>
  );
}

export default Header;
