import { useState } from 'react';
import { equals } from 'ramda'

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';

import Header from './Header';
import TestPlan from './TestPlan';
import Dictionary from './Dictionary';

const TEST_PLAN_ID = 'test-plan';
const DICTIONARY_ID = 'dictionary';

const ListScreen = () => {
  const [tabId, setTabId] = useState(TEST_PLAN_ID);

  return (
    <>
      <Header tabId={tabId} onTabClick={setTabId} />

      <ScrollContainer>
        {equals(tabId, TEST_PLAN_ID) && (
          <TestPlan />
        )}
        {equals(tabId, DICTIONARY_ID) && (
          <Dictionary />
        )}
      </ScrollContainer>
    </>
  )
}

export default ListScreen;
