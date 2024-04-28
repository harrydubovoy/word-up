import common from './common';
import listScreen from './list-screen';
import addWordScreen from './add-word-screen';
import emptyScreen from './empty-screen';
import testScreen from './test-screen';
import settingsScreen from './settings-screen';
import trashBinScreen from './trash-bin-screen';

const ua = {
  translation: {
    ...common,
    ...listScreen,
    ...addWordScreen,
    ...emptyScreen,
    ...testScreen,
    ...settingsScreen,
    ...trashBinScreen,
  }
}

export default ua;
