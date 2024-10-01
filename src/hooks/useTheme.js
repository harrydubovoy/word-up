import { useLayoutEffect } from 'react';

import { storage } from '../storage';
import { theme } from '../constants/theme';

export const useTheme = () => {
  useLayoutEffect(() => {
    if (theme.dark === storage().get(theme.keyName)) {
      document.body.classList.add(theme.dark);
    }
  }, []);

  return null;
};
