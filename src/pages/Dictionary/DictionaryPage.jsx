import { styled } from '../../ui-kit/theme';
import { Box } from '../../ui-kit/Box';

import { List } from '../../shared/utils/List';

import { useDictionary } from '../../entities';

import { DictionaryWordCard } from '../../widgets/DictionaryWordCard';

import { useUnmountPage } from './useUnmountPage';

const Grid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',

  width: '100%',
  margin: '0 auto',
});

export function DictionaryPage() {
  useUnmountPage();
  const { dictionaryIds } = useDictionary();

  return (
    <Grid>
      <List.Map array={dictionaryIds}>
        {(id) => (
          <DictionaryWordCard key={id} id={id} />
        )}
      </List.Map>
    </Grid>
  );
}
