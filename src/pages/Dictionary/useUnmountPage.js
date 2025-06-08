import { useEffect } from 'react';

import { useAsideContentPortalContext } from '../../shared/contextes/AsideContentPortal';

export const useUnmountPage = () => {
  const { removeRenderComponent } = useAsideContentPortalContext();

  useEffect(() => () => {
    removeRenderComponent();
  }, []);
};
