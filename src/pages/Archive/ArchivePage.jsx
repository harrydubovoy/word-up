import { length } from 'ramda';
import Box from '@mui/material/Box';

import { List } from '../../shared/utils/List';
import { styled } from '../../ui-kit/theme';

import { useArchive } from '../../entities';

import { ArchiveWordCard } from '../../widgets/ArchiveWordCard';
import { EmptyScreen, isArchiveEmptyScreenVisible } from '../../widgets/EmptyScreen';

const Grid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',

  width: '100%',
  margin: '0 auto',
});

export function ArchivePage() {
  const { archiveIds } = useArchive();

  return (
    <EmptyScreen type={isArchiveEmptyScreenVisible(length(archiveIds))}>
      <Grid>
        <List.Map array={archiveIds}>
          {(id) => (
            <ArchiveWordCard key={id} id={id} />
          )}
        </List.Map>
      </Grid>
    </EmptyScreen>
  );
}
