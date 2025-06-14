import { Outlet } from 'react-router-dom';
import MuiBox from '@mui/material/Box';

import { Box } from '../ui-kit/Box';
import { Badge } from '../ui-kit/Badge';

import { Navigation } from '../widgets/Navigation';
// import { Copyright } from '../widgets/Copyright';

import { AsideContentPortalProvider, EXTRA_ASIDE_AREA } from '../shared/contextes/AsideContentPortal';

import './App.css';

export function App() {
  return (
    <AsideContentPortalProvider id={EXTRA_ASIDE_AREA}>
      <MuiBox sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
      >
        <MuiBox sx={{
          display: 'grid',
          gridTemplateColumns: '0.7fr 1.5fr 0.7fr',
          gridTemplateRows: '1fr auto',
          maxHeight: '90%',
          height: '100%',
          width: '100%',
          maxWidth: '984px',
          margin: '0 auto',
          padding: '0 16px',
          gap: '0 16px',
        }}
        >
          <Box captionTop={[<Badge key="navigation" variant="background0">Navigation</Badge>]}>
            <Navigation />
          </Box>
          <Box className="overflow-hidden">
            <MuiBox sx={{ height: '100%', width: '100%', overflow: 'auto' }}>
              <Outlet />
            </MuiBox>
          </Box>
        </MuiBox>
      </MuiBox>
    </AsideContentPortalProvider>
  );
}
