import { cn } from '../../lib/utils';

import { Container } from '../../ui/Container';
import { Box } from '../../ui/Box';
import { Hr } from '../../ui/Hr';

function ScreenHeader({ children, className }) {
  return (
    <>
      <Box className={cn('py-5', className)}>
        <Container>
          {children}
        </Container>
      </Box>
      <Hr />
    </>
  );
}

export default ScreenHeader;
