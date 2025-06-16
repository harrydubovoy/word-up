import { Typography } from '../../../ui-kit/Typography';
import { EmptyScreenContent } from './EmptyScreenContent';

export function DefaultScreenEmpty() {
  return (
    <EmptyScreenContent>
      <Typography variant="h1">
        No words yet
      </Typography>
    </EmptyScreenContent>
  );
}
