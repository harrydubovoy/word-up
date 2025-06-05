import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

import { Typography } from '../../../ui-kit/Typography.jsx';
import { EmptyScreenContent } from './EmptyScreenContent.jsx';

export function ArchiveScreenEmpty() {
  return (
    <EmptyScreenContent>
      <Inventory2OutlinedIcon sx={{ fontSize: 84, color: (theme) => theme.palette.primary.main }} />
      <Typography variant="h5" textAlign="center">
        Archive is empty
      </Typography>
    </EmptyScreenContent>
  );
}
