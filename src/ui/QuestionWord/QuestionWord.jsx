import { Card, CardContent } from '../../ui-kit/Card';
import { Typography } from '../../ui-kit/Typography';

import { If } from '../../shared/utils/If';

import { PartOfSpeechChip } from '../PartOfSpeechChip';

export function QuestionWord({
  isTestReversed,
  isTestStarted,
  questionWord,
  partOfSpeech,
  transcription,
  onReverseTest,
}) {
  return (
    <Card
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '132px',
        backgroundColor: (theme) => theme.palette.jetStream,
        color: (theme) => theme.palette.lunarGreen,
        cursor: isTestStarted ? 'default' : 'pointer',
      }}
      onClick={onReverseTest}
    >
      <CardContent>
        <>
          <If condition={!isTestReversed}>
            <PartOfSpeechChip label={partOfSpeech} />
          </If>
          <Typography color="inherit" variant="h5">
            {questionWord}
          </Typography>
          <If condition={transcription && !isTestReversed}>
            <Typography sx={{ marginTop: '8px', textAlign: 'center' }} variant="subtitle2" fontWeight="400">
              /
              {transcription}
              /
            </Typography>
          </If>
        </>
      </CardContent>
    </Card>
  );
}
