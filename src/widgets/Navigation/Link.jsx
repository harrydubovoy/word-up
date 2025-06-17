import { useMatch, Link as RRDLink } from 'react-router-dom';

import { LayoutBox } from '../../ui-kit/LayoutBox';
import { styled } from '../../ui-kit/theme';

const NavigationItem = styled(LayoutBox)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const NavigationLink = styled(RRDLink)({
  width: '100%',
});

const useActiveVariant = (to) => {
  const isMatch = useMatch(to);

  return isMatch ? 'background1' : 'background0';
};

export function Link({ to, children }) {
  const activeVariant = useActiveVariant(to);

  return (
    <NavigationItem as="li" sx={{ backgroundColor: `var(--${activeVariant})` }}>
      <NavigationLink to={to} size="small">{children}</NavigationLink>
    </NavigationItem>
  );
}
