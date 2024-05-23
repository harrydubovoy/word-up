import ScreenHeader from '../../screen-components/ScreenHeader';

import Typography from '../../ui/Typography';

import {
  LIST_SCREEN__TITLE,
  LIST_SCREEN__TEST_PLAN_DESCRIPTION,
} from '../../translations/resources/constants';

import { useAppSelector } from '../../store/hooks';
import { selectTotalTestPlan } from '../../store/reducer/test-plan.slice';
import { selectTotalDictionary } from '../../store/reducer/dictionary.slice';

import { useTranslation } from '../../translations';

const Header = () => {
  const totalTestPlan = useAppSelector(selectTotalTestPlan);
  const totalDictionary = useAppSelector(selectTotalDictionary);
  const { t } = useTranslation();

  return (
    <ScreenHeader>
      <div className="flex justify-between gap-2">
        <div>
          <Typography variant="h5">{t(LIST_SCREEN__TITLE)}</Typography>
          <Typography variant="small">
            {t(LIST_SCREEN__TEST_PLAN_DESCRIPTION, { totalTestPlan, totalDictionary })}
          </Typography>
        </div>
      </div>
    </ScreenHeader>
  )
}

export default Header;
