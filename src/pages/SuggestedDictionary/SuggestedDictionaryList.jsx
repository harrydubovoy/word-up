import { useEffect } from 'react';

import { useAsideContentPortalContext } from '../../shared/contextes/AsideContentPortal';

import { SuggestedDictionaryAside } from './SuggestedDictionaryAside';
import { styled } from '../../ui-kit/theme';
import { LayoutBox } from '../../ui-kit/LayoutBox';
import { List } from '../../shared/utils/List';
import { SuggestedDictionaryWordCard } from '../../widgets/SuggestedDictionaryWordCard';
import { EmptyScreen } from '../../widgets/EmptyScreen';

import { useSuggestedDictionaryStoreContext } from '../../shared/contextes/SuggestedDictionaryStore';

const Grid = styled(LayoutBox)({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '8px',

  width: '100%',
  margin: '0 auto',
});

export function SuggestedDictionaryList() {
  const { data, loadDictionaryByLetter } = useSuggestedDictionaryStoreContext();
  const { addRenderComponent, removeRenderComponent } = useAsideContentPortalContext();

  useEffect(() => {
    addRenderComponent(<SuggestedDictionaryAside onClick={loadDictionaryByLetter} />);
    return () => {
      removeRenderComponent();
    };
  }, []);

  return (
    <EmptyScreen>
      <Grid>
        <List.Map array={data.original.entities.ids}>
          {(id) => (
            <SuggestedDictionaryWordCard key={id} id={id} />
          )}
        </List.Map>
      </Grid>
    </EmptyScreen>
  );
}
