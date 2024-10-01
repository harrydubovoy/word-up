import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

import { Button } from '../ui/Button';

import { storage } from '../storage';
import { theme } from '../constants/theme';

function ThemeIcon({ themeKey }) {
  if (themeKey === theme.dark) {
    return <Moon />;
  }

  return <Sun />;
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
    <Button size="icon" onClick={handleOnClick}>
      <ThemeIcon themeKey={themVariant} />
    </Button>
  );
}
