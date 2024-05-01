import { equals } from 'ramda';

import ScreenHeader from '../../screen-components/ScreenHeader';

import Typography from '../../ui/Typography';
import IconButton from '../../ui/IconButton';

import ChecklistSvg from '../../icons/ChecklistSvg';
import DictionarySvg from '../../icons/DictionarySvg';

import {
  LIST_SCREEN__DICTIONARY_DESCRIPTION,
  LIST_SCREEN__TEST_PLAN_DESCRIPTION,
  LIST_SCREEN__TITLE
} from '../../translations/resources/constants';
import { useTranslation } from '../../translations';

const TEST_PLAN_ID = 'test-plan';
const DICTIONARY_ID = 'dictionary';

const Header = ({ tabId, onTabClick }) => {
  const { t } = useTranslation();
  const DESCRIPTION = equals(tabId, TEST_PLAN_ID) ? LIST_SCREEN__TEST_PLAN_DESCRIPTION : LIST_SCREEN__DICTIONARY_DESCRIPTION;

  return (
    <ScreenHeader>
      <div className="flex justify-between gap-2">
        <div>
          <Typography variant="h5">{t(LIST_SCREEN__TITLE)}</Typography>
          <Typography variant="small">{t(DESCRIPTION)}</Typography>
        </div>
        <div className="mb-3 flex gap-2">
          <IconButton
            size="sm"
            variant={equals(tabId, TEST_PLAN_ID) ? 'filled' : 'outlined'}
            onClick={() => onTabClick(TEST_PLAN_ID)}
          >
            <ChecklistSvg />
          </IconButton>
          <IconButton
            size="sm"
            variant={equals(tabId, DICTIONARY_ID) ? 'filled' : 'outlined'}
            onClick={() => onTabClick(DICTIONARY_ID)}
          >
            <DictionarySvg />
          </IconButton>
        </div>
      </div>
    </ScreenHeader>
  )
}

export default Header;
