import { Outlet } from 'react-router-dom';
import MuiBox from '@mui/material/Box';

import { Box } from '../ui-kit/Box';

import { Navigation } from '../widgets/Navigation';
import { Content } from '../ui/Content';
import { Copyright } from '../widgets/Copyright';

import { AsideContentPortalProvider, EXTRA_ASIDE_AREA } from '../shared/contextes/AsideContentPortal';

import { BoxLayout } from '../ui-kit/BoxLayout';

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
          gridTemplateColumns: '0.8fr 2fr 0.8fr',
          gridTemplateRows: '1fr auto',
          maxHeight: '90%',
          height: '100%',
          width: '100%',
          maxWidth: '1154px',
          margin: '0 auto',
          padding: '0 16px',
          gap: '0 16px',
        }}
        >
          <Box>
            <Navigation />
          </Box>
          <Box>
            Hello
          </Box>
          {/*<Content sx={{ backgroundColor: '#32473b' }}>*/}
          {/*  <Navigation />*/}
          {/*</Content>*/}

          {/*<Content sx={{ backgroundColor: '#e0dfdc', overflow: 'hidden' }}>*/}
          {/*  <Box sx={{*/}
          {/*    overflowY: 'auto',*/}
          {/*    height: '100%',*/}
          {/*    margin: '0 -16px',*/}
          {/*    padding: '0 16px',*/}
          {/*  }}*/}
          {/*  >*/}
          {/*    <Outlet />*/}
          {/*  </Box>*/}
          {/*</Content>*/}

          {/*<div id={EXTRA_ASIDE_AREA} />*/}

          {/*<Box sx={{ gridColumn: '2 / 3', gridRow: '2 / 2' }}>*/}
          {/*  <Copyright />*/}
          {/*</Box>*/}
        </MuiBox>
      </MuiBox>
    </AsideContentPortalProvider>
  );
}
