import { Outlet } from 'react-router-dom';

import { Box } from '../ui-kit/Box';

import { Navigation } from '../widgets/Navigation';
import { Content } from '../ui/Content';
import { Copyright } from '../widgets/Copyright';

import { AsideContentPortalProvider, EXTRA_ASIDE_AREA } from '../shared/contextes/AsideContentPortal';

import './App.css';

export function App() {
  return (
    <AsideContentPortalProvider id={EXTRA_ASIDE_AREA}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
      >
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gridTemplateRows: '1fr auto',
          maxHeight: '90%',
          height: '100%',
          width: '100%',
          maxWidth: '1124px',
          margin: '0 auto',
          padding: '0 16px',
          gap: '0 16px',
        }}
        >
          <Content sx={{ backgroundColor: '#32473b' }}>
            <Navigation />
          </Content>

          <Content sx={{ backgroundColor: '#e0dfdc', overflow: 'hidden' }}>
            <Box sx={{
              overflowY: 'auto',
              height: '100%',
              margin: '0 -16px',
              padding: '0 16px',
            }}
            >
              <Outlet />
            </Box>
          </Content>

          <div id={EXTRA_ASIDE_AREA} />

          <Box sx={{ gridColumn: '2 / 3', gridRow: '2 / 2' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </AsideContentPortalProvider>
  );
}
