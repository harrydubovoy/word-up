import MuiDrawer from '@mui/material/Drawer';

import { styled } from './theme';

const Drawer = styled(MuiDrawer)(() => ({
  '& .MuiDrawer-paper': {
    borderRadius: '24px',
    margin: '16px',
  },
}));

export { Drawer };
