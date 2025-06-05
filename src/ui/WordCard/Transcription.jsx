import Typography from '@mui/material/Typography';

import { If } from '../../shared/utils/If';

export function Transcription({ children }) {
  return (
    <If condition={children}>
      <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
        [
        {children}
        ]
      </Typography>
    </If>
  );
}
