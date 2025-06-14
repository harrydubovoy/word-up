import MuiBox from '@mui/material/Box';

import { Box } from '../../ui-kit/Box';
import { Typography } from '../../ui-kit/Typography';
import { Badge } from '../../ui-kit/Badge';
import { If } from '../../shared/utils/If';

const selectedTuple = [' ', <Badge key="added" variant="yellow">Added</Badge>];

export function WordCard({
  isSelected,
  native,
  foreign,
  transcription,
  partOfSpeech,
  description,
  renderActions,
}) {
  return (
    <Box captionTop={isSelected ? selectedTuple : null}>
      <MuiBox>
        <If condition={partOfSpeech}>
          <MuiBox sx={{ marginBottom: '8px' }}>
            <Badge variant="background1">{partOfSpeech}</Badge>
          </MuiBox>
        </If>
        <MuiBox sx={{ display: 'flex', gap: '2px' }}>
          <Typography variant="h3">{foreign}</Typography>
          <If condition={transcription}>
            <Typography variant="p">
              [
              {transcription}
              ]
            </Typography>
          </If>
        </MuiBox>
        <Typography variant="h3">{native}</Typography>

        <MuiBox sx={{ display: 'flex', justifyContent: 'end', gap: '4px', marginTop: '12px' }}>
          {renderActions()}
        </MuiBox>
        <If condition={description}>
          <Box type="round">
            <Typography variant="p">{description}</Typography>
          </Box>
        </If>
      </MuiBox>
    </Box>
  );
}
