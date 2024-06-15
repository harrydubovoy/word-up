import { cn } from '../../lib/utils';

import { Card, CardContent } from '../../ui/Card';
import { Typography } from '../../ui/Typography';
import { Box } from '../../ui/Box';
import { PartOfSpeechBadge } from '../../components/PartOfSpeechBadge';
import { FlipCard } from '../../components/FlipCard';
import { If } from '../../util-components/If';

import { isTestReversed } from './utils';

function QuestionWord({
  questionWordForeign,
  questionWordNative,
  partOfSpeech,
  transcription,
  wordKeyType,
}) {
  return (
    <FlipCard
      className="h-32"
      isToggled={isTestReversed(wordKeyType)}
      renderFront={({ frontClassName }) => (
        <Card className={cn(frontClassName, 'bg-jet-stream h-full flex justify-center items-center')}>
          <CardContent className="p-0">
            <If condition={partOfSpeech}>
              <PartOfSpeechBadge className="absolute right-2 top-2">{partOfSpeech}</PartOfSpeechBadge>
            </If>
            <Typography className="text-xl font-bold text-lunar-green text-center">
              {questionWordForeign}
            </Typography>
            <If condition={transcription}>
              <Box htmltag="span" className="flex justify-center mt-2">
                <Typography as="span" variant="small" className="text-slate-600">
                  /
                  {transcription}
                  /
                </Typography>
              </Box>
            </If>
          </CardContent>
        </Card>
      )}
      renderBack={({ backClassName }) => (
        <Card className={cn(backClassName, 'bg-jet-stream h-full flex justify-center items-center')}>
          <CardContent className="p-0">
            <Typography className="text-xl font-bold text-lunar-green text-center">
              {questionWordNative}
            </Typography>
          </CardContent>
        </Card>
      )}
    />
  );
}

export default QuestionWord;
