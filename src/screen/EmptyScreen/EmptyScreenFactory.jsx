import { DefaultScreenEmpty } from './screens/DefaultScreenEmpty';
import { ArchiveScreenEmpty } from './screens/ArchiveScreenEmpty';

import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

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