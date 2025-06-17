import { length } from 'ramda';

import { styled } from '../../ui-kit/theme';
import { LayoutBox } from '../../ui-kit/LayoutBox';
import { Container } from '../../ui-kit/Container';

import { List } from '../../shared/utils/List';

import { EmptyScreen, isDefaultEmptyScreenVisible } from '../../widgets/EmptyScreen';

import { useDictionary } from '../../entities';

import { DictionaryWordCard } from '../../widgets/DictionaryWordCard';

import { useUnmountPage } from './useUnmountPage';

const Grid = styled(LayoutBox)({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '8px',

  maxWidth: '90%',
  width: '100%',
  margin: '0 auto',
});

export function DictionaryPage() {
  useUnmountPage();
  const { dictionaryIds } = useDictionary();

  return (
    <EmptyScreen type={isDefaultEmptyScreenVisible(length(dictionaryIds))}>
      <Container>
        <Grid>
          <List.Map array={dictionaryIds}>
            {(id) => (
              <DictionaryWordCard key={id} id={id} />
            )}
          </List.Map>
        </Grid>
      </Container>
    </EmptyScreen>
  );
}
