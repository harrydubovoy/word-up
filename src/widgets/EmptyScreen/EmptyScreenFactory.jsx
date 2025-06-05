import { DefaultScreenEmpty } from './screens/DefaultScreenEmpty.jsx';
import { ArchiveScreenEmpty } from './screens/ArchiveScreenEmpty.jsx';

import { EMPTY_SCREEN_TYPE } from '../../shared/constants/screens.js';

export function EmptyScreenFactory({ type }) {
  switch (type) {
    case EMPTY_SCREEN_TYPE.ARCHIVE: {
      return <ArchiveScreenEmpty />;
    }
    default: {
      return (
        <DefaultScreenEmpty />
      );
    }
  }
}
