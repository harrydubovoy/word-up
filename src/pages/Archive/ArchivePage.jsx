import { length } from 'ramda';

import { List } from '../../shared/utils/List';
import { styled } from '../../ui-kit/theme';
import { LayoutBox } from '../../ui-kit/LayoutBox';

import { useArchive } from '../../entities';

import { ArchiveWordCard } from '../../widgets/ArchiveWordCard';
import { EmptyScreen, isArchiveEmptyScreenVisible } from '../../widgets/EmptyScreen';

const Grid = styled(LayoutBox)({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '8px',

  maxWidth: '90%',
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
