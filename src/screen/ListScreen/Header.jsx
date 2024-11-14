import Filter from '@material-design-icons/svg/outlined/filter_alt.svg';

import ScreenHeader from '../../screen-components/ScreenHeader';
import { Description } from '../../components/Description';

import { Typography } from '../../ui/Typography';
import { ButtonIcon } from '../../ui/Button';
import { Box } from '../../ui/Box';

import {
  LIST_SCREEN__TITLE,
  LIST_SCREEN__TEST_PLAN_DESCRIPTION,
} from '../../translations/resources/constants';

import { useAppSelector } from '../../store/hooks';
import { selectTotalTestPlan } from '../../store/reducer/test-plan.slice';
import { selectTotalDictionary } from '../../store/reducer/dictionary.slice';

import { useTranslation } from '../../translations';

export function Header({ onClickOpenFilter }) {
  const totalTestPlan = useAppSelector(selectTotalTestPlan);
  const totalDictionary = useAppSelector(selectTotalDictionary);
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <Box className="flex justify-between items-center gap-2">
        <Box>
          <Typography htmltag="h1" variant="h4">{t(LIST_SCREEN__TITLE)}</Typography>
          <Description>
            {t(LIST_SCREEN__TEST_PLAN_DESCRIPTION, { totalTestPlan, totalDictionary })}
          </Description>
        </Box>
        <Box className="shrink-0">
          <ButtonIcon disabled={!totalDictionary} variant="outlined" onClick={onClickOpenFilter}>
            <Filter />
          </ButtonIcon>
        </Box>

      </Box>
    </ScreenHeader>
  );
}
