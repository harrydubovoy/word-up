import { useState, createContext, useContext, useMemo } from 'react';
import { createPortal } from 'react-dom';

const AsideContentPortalContext = createContext(undefined);

export const EXTRA_ASIDE_AREA = 'extra-aside-area';

export function AsideContentPortalProvider({ children, id }) {
  const [component, setComponent] = useState(null);

  const addRenderComponent = useMemo(() => (cmp) => {
    setComponent(cmp);
  }, []);

  const removeRenderComponent = useMemo(() => () => {
    setComponent(null);
  }, []);

  return (
    <AsideContentPortalContext.Provider value={{ addRenderComponent, removeRenderComponent }}>
      {document.getElementById(id) && Boolean(component) && (
        createPortal(
          component,
          document.getElementById(id),
          ADDITIONAL_ASIDE_ID,
        )
      )}
      {children}
    </AsideContentPortalContext.Provider>
  );
}

export const useAsideContentPortalContext = () => {
  const context = useContext(AsideContentPortalContext);
  if (!context) {
    throw new Error('useAsideContentPortalContext must be used within a AsideContentPortalProvider');
  }

  return context;
};
