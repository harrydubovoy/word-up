import React, { useState } from "react";
import { equals } from 'ramda'

import ScreenContainer from "../../screen-components/ScreenContainer";
import ScrollContainer from "../../screen-components/ScrollContainer";
import IconButton from "../../ui/IconButton";
import Typography from "../../ui/Typography";
import Hr from "../../ui/Hr";

import TestPlan from "./TestPlan";
import Dictionary from "./Dictionary";

import DictionarySvg from '../../icons/DictionarySvg';
import ChecklistSvg from '../../icons/ChecklistSvg';

import { useTranslation } from '../../translations';
import {
  LIST_SCREEN__TITLE,
  LIST_SCREEN__TEST_PLAN_DESCRIPTION,
  LIST_SCREEN__DICTIONARY_DESCRIPTION,
} from '../../translations/resources/constants';

const TEST_PLAN_ID = 'test-plan';
const DICTIONARY_ID = 'dictionary';

const ListScreen = () => {
  const { t } = useTranslation();
  const [tabId, setTabId] = useState(TEST_PLAN_ID);
  const DESCRIPTION = equals(tabId, TEST_PLAN_ID) ? LIST_SCREEN__TEST_PLAN_DESCRIPTION : LIST_SCREEN__DICTIONARY_DESCRIPTION;

  return (
    <ScreenContainer>
      <div className="mb-3">
        <div className="flex justify-between gap-2">
          <div>
            <Typography variant="h5">{t(LIST_SCREEN__TITLE)}</Typography>
            <Typography variant="small">{t(DESCRIPTION)}</Typography>
          </div>
          <div className="mb-3 flex gap-2">
            <IconButton
              size="sm"
              variant={equals(tabId, TEST_PLAN_ID) ? 'filled' : 'outlined'}
              onClick={() => setTabId(TEST_PLAN_ID)}
            >
              <ChecklistSvg />
            </IconButton>
            <IconButton
              size="sm"
              variant={equals(tabId, DICTIONARY_ID) ? 'filled' : 'outlined'}
              onClick={() => setTabId(DICTIONARY_ID)}
            >
              <DictionarySvg />
            </IconButton>
          </div>
        </div>
        <div className="my-3">
          <Hr />
        </div>
      </div>

      <ScrollContainer>
        {equals(tabId, TEST_PLAN_ID) && (
          <TestPlan />
        )}
        {equals(tabId, DICTIONARY_ID) && (
          <Dictionary />
        )}
      </ScrollContainer>

    </ScreenContainer>
  )
}

export default ListScreen;
