import React from 'react';

import Typography from '../../ui/Typography';
import IconButton from '../../ui/IconButton';
import ScreenHeader from '../../screen-components/ScreenHeader';
import FlagIcon, {FLAG_ICON_TYPE} from '../../components/FlagIcon';

import { TEST_SCREEN__DESCRIPTION, TEST_SCREEN__TITLE } from '../../translations/resources/constants';


import { useTranslation } from '../../translations';
import { getTestDoneDateTime } from '../../utils/dateTime';


const Header = ({ isTestStarted, isTestRevered, onReverseTest }) => {
  const { t } = useTranslation();

  const testDoneDateTime = getTestDoneDateTime();

  return (
    <ScreenHeader>
      <div className="flex justify-between gap-2">
        <div>
          <Typography variant="h5">{t(TEST_SCREEN__TITLE)}</Typography>
          {testDoneDateTime && (
            <Typography variant="small">
              {t(TEST_SCREEN__DESCRIPTION)}
              <span className="font-semibold text-gray-600">{testDoneDateTime}</span>
            </Typography>
          )}
        </div>
        <div className="mb-3 flex gap-2">
          <IconButton
            variant="text"
            disabled={isTestStarted}
            onClick={onReverseTest}
          >
            <FlagIcon type={isTestRevered ? FLAG_ICON_TYPE.UA : FLAG_ICON_TYPE.ENG} />
          </IconButton>
        </div>
      </div>
    </ScreenHeader>
  )
}

export default Header;
