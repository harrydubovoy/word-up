import { Box } from './Box';

import { styled } from './theme';

const Container = styled(Box)(() => ({
  padding: '0 16px',
  width: '100%',
  margin: '0 auto',
  '@media (min-width: 576px)': {
    maxWidth: '380px',
  },
}));

export { Container };
