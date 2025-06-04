import Box from '@mui/material/Box';

import { List } from '../../shared/utils/List.jsx';
import { styled } from '../../ui-kit/theme';

import { useArchive } from '../../entities';

import { ArchiveWordCard } from '../../widgets/ArchiveWordCard';

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
    <Grid>
      <List.Map array={archiveIds}>
        {(id) => (
          <ArchiveWordCard key={id} id={id} />
        )}
      </List.Map>
    </Grid>
  );
}
