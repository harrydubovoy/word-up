import { Box } from '../../ui/Box';
import { Hr } from '../../ui/Hr';
import { Typography } from '../../ui/Typography';
import { If } from '../../util-components/If';

export function Description({ children, isVisible }) {
  return (
    <If condition={isVisible}>
      <Box className="pt-4">
        <Hr className="mb-2" />
        <Typography variant="small">
          {children}
        </Typography>
      </Box>
    </If>
  );
}
