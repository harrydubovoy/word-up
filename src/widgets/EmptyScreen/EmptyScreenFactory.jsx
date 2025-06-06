import { DefaultScreenEmpty } from './screens/DefaultScreenEmpty';
import { ArchiveScreenEmpty } from './screens/ArchiveScreenEmpty';

import { EMPTY_SCREEN_TYPE } from './constants/types';

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
