import { useState } from 'react';
import LightModeSvg from '@material-design-icons/svg/outlined/light_mode.svg';
import DarkModeSvg from '@material-design-icons/svg/outlined/dark_mode.svg';

import { ButtonIcon } from '../ui/Button';

import { storage } from '../storage';
import { theme } from '../constants/theme';

function ThemeIcon({ themeKey }) {
  if (themeKey === theme.dark) {
    return <DarkModeSvg />;
  }

  return <LightModeSvg />;
}

export function ThemeButton() {
  const [themVariant, setThemeVariant] = useState(() => storage().get(theme.keyName));

  const handleOnClick = () => {
    document.body.classList.toggle(theme.dark);

    if (document.body.classList.contains(theme.dark)) {
      storage().set(theme.keyName, theme.dark);
      setThemeVariant(theme.dark);

      return;
    }

    storage().removeByKey(theme.keyName);
    setThemeVariant(null);
  };

  return (
    <ButtonIcon variant="filled" onClick={handleOnClick}>
      <ThemeIcon themeKey={themVariant} />
    </ButtonIcon>
  );
}
