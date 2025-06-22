import Typography from '@mui/material/Typography';

import { Box } from '../../ui-kit/Box';
import { If } from '../../shared/utils/If';

export function Description({ children }) {
  return (
    <If condition={children}>
      <Box sx={{ padding: '8px 16px 0' }}>
        <Typography variant="caption">
          {children}
        </Typography>
      </Box>
    </If>
  );
}
