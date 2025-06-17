import { LayoutBox } from '../../ui-kit/LayoutBox';
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
    <LayoutBox onClick={isTestStarted ? Function.prototype : onReverseTest}>
      <Box type="round">
        <LayoutBox sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          height: '95px',
        }}
        >
          <If condition={(!isTestReversed && partOfSpeech)}>
            <Badge>{partOfSpeech}</Badge>
          </If>
          <LayoutBox sx={{ margin: '12px 0' }}>
            <Typography variant="h1">
              {questionWord}
            </Typography>
          </LayoutBox>
          <If condition={transcription && !isTestReversed}>
            <Typography variant="p">
              [
              {transcription}
              ]
            </Typography>
          </If>
        </LayoutBox>
      </Box>
    </LayoutBox>
  );
}
