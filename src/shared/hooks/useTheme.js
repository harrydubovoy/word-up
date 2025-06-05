import { useLayoutEffect } from 'react';

import { storage } from '../storage/index.js';
import { theme } from '../constants/theme.js';

export const useTheme = () => {
  useLayoutEffect(() => {
    if (theme.dark === storage().get(theme.keyName)) {
      document.body.classList.add(theme.dark);
    }
  }, []);

  return null;
};
