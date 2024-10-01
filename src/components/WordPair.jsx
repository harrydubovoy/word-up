import { If } from '../util-components/If';

import { Typography } from '../ui/Typography';
import { Box } from '../ui/Box';
import { PartOfSpeechBadge } from './PartOfSpeechBadge';

import { cn } from '../lib/utils';

function WordPair({ foreign, native, transcription, partOfSpeech, isSelected }) {
  return (
    <Box
      className={cn('rounded-ss-lg text-primary/80 dark:text-secondary/80 relative rounded-ee-xl w-full transform flex flex-col gap-2 -translate-x-3.5 -translate-y-3.5 p-3', {
        'bg-link-water': !isSelected,
        'bg-tea-green': isSelected,
      })}
    >
      <If condition={partOfSpeech}>
        <PartOfSpeechBadge className="absolute right-3">{partOfSpeech}</PartOfSpeechBadge>
      </If>
      <Typography
        variant="paragraph"
        className="font-normal flex items-center gap-3"
      >
        {foreign}
        <If condition={transcription}>
          <Typography className="text-slate-500" variant="small">
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
