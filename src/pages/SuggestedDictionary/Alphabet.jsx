import { List } from '../../shared/utils/List';
import { Button } from '../../ui-kit/Button';
import { Box } from '../../ui-kit/Box';

import { letters } from '../../shared/contextes/SuggestedDictionaryStore';

export function Alphabet({ onClick }) {
  const handleOnClick = (letter) => () => {
    onClick(letter);
  };

  return (
    <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <List.Map array={letters}>
        {(letter) => (
          <Button size="small" onClick={handleOnClick(letter)} key={letter} variant="contained">{letter}</Button>
        )}
      </List.Map>
    </Box>
  );
}
