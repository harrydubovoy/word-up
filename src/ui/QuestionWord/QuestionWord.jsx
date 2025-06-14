import MuiBox from '@mui/material/Box';

import { Typography } from '../../ui-kit/Typography';
import { Box } from '../../ui-kit/Box';
import { Badge } from '../../ui-kit/Badge';

import { If } from '../../shared/utils/If';

export function QuestionWord({
  isTestReversed,
  isTestStarted,
  questionWord,
  partOfSpeech,
  transcription,
  onReverseTest,
}) {
  return (
    <MuiBox onClick={isTestStarted ? Function.prototype : onReverseTest}>
      <Box type="round">
        <MuiBox sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <If condition={(!isTestReversed && partOfSpeech)}>
            <Badge>{partOfSpeech}</Badge>
          </If>
          <MuiBox sx={{ margin: '12px 0' }}>
            <Typography variant="h1">
              {questionWord}
            </Typography>
          </MuiBox>
          <If condition={transcription && !isTestReversed}>
            <Typography variant="p">
              [
              {transcription}
              ]
            </Typography>
          </If>
        </MuiBox>
      </Box>
    </MuiBox>
  );
}
