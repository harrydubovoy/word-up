import { LayoutBox } from './LayoutBox';

import { styled } from './theme';

const Container = styled(LayoutBox)(() => ({
  padding: '0 16px',
  width: '100%',
  margin: '0 auto',
  maxWidth: '542px',
}));

export { Container };
