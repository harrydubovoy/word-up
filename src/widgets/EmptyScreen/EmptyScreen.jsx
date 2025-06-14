import MuiBox from '@mui/material/Box';

import { EmptyScreenFactory } from './EmptyScreenFactory';

export function EmptyScreen({ children, type }) {
  if (type) {
    return (
      <MuiBox sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <EmptyScreenFactory type={type} />
      </MuiBox>
    );
  }

  return children;
}
