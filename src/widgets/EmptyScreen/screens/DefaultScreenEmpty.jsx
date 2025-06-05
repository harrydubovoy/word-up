import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

import { Typography } from '../../../ui-kit/Typography.jsx';
import { EmptyScreenContent } from './EmptyScreenContent.jsx';

export function DefaultScreenEmpty() {
  return (
    <EmptyScreenContent>
      <CloudOutlinedIcon sx={{ fontSize: 84, color: (theme) => theme.palette.primary.main }} />
      <Typography variant="h5">
        No words yet
      </Typography>
    </EmptyScreenContent>
  );
}
