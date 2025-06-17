import { styled } from '../../ui-kit/theme';
import { LayoutBox } from '../../ui-kit/LayoutBox';
import { Container } from '../../ui-kit/Container';

import { Link } from './Link';

const NavigationList = styled(LayoutBox)({
  display: 'grid',
  margin: '12px 0',

  '& li::before': {
    content: '"├ "',
  },
});

export function Navigation() {
  return (
    <Container>
      <NavigationList as="ul">
        <Link to="/">Test</Link>
        <Link to="/dictionary">Dictionary</Link>
        <Link to="/add">Add</Link>
        <Link to="/archive">Archive</Link>

        {/* <Link to="/suggested-dictionary">[S] Suggested</Link> */}
      </NavigationList>
    </Container>

  );
}
