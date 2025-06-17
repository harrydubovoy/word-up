import { Typography } from '../../../ui-kit/Typography';
import { EmptyScreenContent } from './EmptyScreenContent';

export function ArchiveScreenEmpty() {
  return (
    <EmptyScreenContent>
      <Typography variant="h1" textAlign="center">
        Archive is empty
      </Typography>
    </EmptyScreenContent>
  );
}
