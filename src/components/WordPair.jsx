import { If } from '../util-components/If';

import { Typography } from '../ui/Typography';
import { Box } from '../ui/Box';
import { PartOfSpeechBadge } from './PartOfSpeechBadge';

import { cn } from '../lib/utils';

function WordPair({ foreign, native, transcription, partOfSpeech, isSelected }) {
  return (
    <Box
      className={cn(
        'relative',
        'flex flex-col gap-2',
        'w-full',
        'rounded-ss-xl  rounded-ee-xl',
        'text-primary/80 dark:text-secondary/80 bg-amber-200',
        'transform -translate-x-3.5 -translate-y-3.5 p-3',
        {
          'bg-amber-200': !isSelected,
          'bg-light-green-300': isSelected,
        },
      )}
    >
      <If condition={partOfSpeech}>
        <PartOfSpeechBadge className="absolute right-3">{partOfSpeech}</PartOfSpeechBadge>
      </If>
      <Typography
        variant="paragraph"
        className="font-semibold flex items-center gap-3"
      >
        {foreign}
        <If condition={transcription}>
          <Typography className="font-normal text-primary/70 dark:text-secondary/70" variant="small">
            /
            {transcription}
            /
          </Typography>
        </If>
      </Typography>
      <Typography
        variant="paragraph"
        className="font-normal flex gap-3 items-center"
      >
        {' '}
        {native}
      </Typography>
    </Box>
  );
}

export default WordPair;
