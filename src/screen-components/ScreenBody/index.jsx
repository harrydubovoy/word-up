import { cn } from '../../lib/utils';

import { Container } from '../../ui/Container';
import { Box } from '../../ui/Box';

function ScreenBody({ children, className }) {
  return (
    <Box className={cn('py-6 min-h-full', className)}>
      <Container>
        {children}
      </Container>
    </Box>
  );
}

export default ScreenBody;
