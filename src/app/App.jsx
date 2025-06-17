import { Outlet } from 'react-router-dom';

import { Box } from '../ui-kit/Box';
import { LayoutBox } from '../ui-kit/LayoutBox';
import { Badge } from '../ui-kit/Badge';

import { Navigation } from '../widgets/Navigation';
import { Copyright } from '../widgets/Copyright';

import { AsideContentPortalProvider, EXTRA_ASIDE_AREA } from '../shared/contextes/AsideContentPortal';

import './App.css';

export function App() {
  return (
    <AsideContentPortalProvider id={EXTRA_ASIDE_AREA}>
      <LayoutBox sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
      >
        <LayoutBox sx={{
          display: 'grid',
          gridTemplateColumns: '0.7fr 1.5fr 0.7fr',
          gridTemplateRows: '1fr auto',
          height: '100%',
          width: '100%',
          margin: '0 auto',
          padding: '16px',
          gap: '0 16px',
        }}
        >
          <Box captionTop={[<Badge key="navigation" variant="background0">Navigation</Badge>]}>
            <Navigation />
          </Box>
          <Box className="overflow-hidden">
            <LayoutBox sx={{ height: '100%', width: '100%', overflow: 'auto' }}>
              <Outlet />
            </LayoutBox>
          </Box>

          <LayoutBox>
            <div id={EXTRA_ASIDE_AREA} />
          </LayoutBox>

          <LayoutBox sx={{ gridColumn: '2 / 3', gridRow: '2 / 2' }}>
            <Copyright />
          </LayoutBox>

        </LayoutBox>
      </LayoutBox>
    </AsideContentPortalProvider>
  );
}
