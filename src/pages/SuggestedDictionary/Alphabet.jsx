import { List } from '../../shared/utils/List';
import { Button } from '../../ui-kit/Button';
import { LayoutBox } from '../../ui-kit/LayoutBox';

import { letters } from '../../shared/contextes/SuggestedDictionaryStore';

export function Alphabet({ onClick }) {
  const handleOnClick = (letter) => () => {
    onClick(letter);
  };

  return (
    <LayoutBox sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <List.Map array={letters}>
        {(letter) => (
          <Button size="small" onClick={handleOnClick(letter)} key={letter}>{letter}</Button>
        )}
      </List.Map>
    </LayoutBox>
  );
}
