import DefaultScreenEmpty from './screens/DefaultScreenEmpty';
import TestScreenEmpty from './screens/TestScreenEmpty';

export const EMPTY_SCREEN_TYPE = {
  DEFAULT: 'DEFAULT',
  TEST: 'TEST',
}

const EmptyScreenFactory = ({ type }) => {
  if (type === EMPTY_SCREEN_TYPE.TEST) {
    return <TestScreenEmpty />
  }

  if (type === EMPTY_SCREEN_TYPE.DEFAULT) {
    return (
      <DefaultScreenEmpty />
    )
  }
}

export default EmptyScreenFactory;
