import DefaultScreenEmpty from './screens/DefaultScreenEmpty';
import TestScreenEmpty from './screens/TestScreenEmpty';
import ListScreenEmpty from './screens/ListScreenEmpty';
import FilteredListScreenEmpty from './screens/FilteredListScreenEmpty';
import TrashBinScreenEmpty from './screens/TrashBinScreenEmpty';

import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

function EmptyScreenFactory({ type }) {
  if (type === EMPTY_SCREEN_TYPE.TEST) {
    return <TestScreenEmpty />;
  }

  if (type === EMPTY_SCREEN_TYPE.LIST) {
    return (
      <ListScreenEmpty />
    );
  }

  if (type === EMPTY_SCREEN_TYPE.FILTERED_LIST) {
    return (
      <FilteredListScreenEmpty />
    );
  }

  if (type === EMPTY_SCREEN_TYPE.TRASH_BIN) {
    return (
      <TrashBinScreenEmpty />
    );
  }

  if (type === EMPTY_SCREEN_TYPE.DEFAULT) {
    return (
      <DefaultScreenEmpty />
    );
  }
}

export default EmptyScreenFactory;
