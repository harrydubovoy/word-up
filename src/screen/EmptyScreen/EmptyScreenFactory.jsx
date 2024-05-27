import DefaultScreenEmpty from './screens/DefaultScreenEmpty';
import TestScreenEmpty from './screens/TestScreenEmpty';

import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

function EmptyScreenFactory({ type }) {
  if (type === EMPTY_SCREEN_TYPE.TEST) {
    return <TestScreenEmpty />;
  }

  if (type === EMPTY_SCREEN_TYPE.DEFAULT) {
    return (
      <DefaultScreenEmpty />
    );
  }
}

export default EmptyScreenFactory;
