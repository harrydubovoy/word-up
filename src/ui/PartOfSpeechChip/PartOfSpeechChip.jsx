import { Box } from '../../ui-kit/Box';
import { Chip } from '../../ui-kit/Chip';

import { If } from '../../shared/utils/If';

export function PartOfSpeechChip({ label }) {
  return (
    <If condition={label}>
      <Box sx={{ position: 'absolute', top: '16px', right: '16px' }}>
        <Chip size="small" label={label} />
      </Box>
    </If>
  );
}
