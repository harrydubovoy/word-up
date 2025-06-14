import { useMatch, useNavigate } from 'react-router-dom';

import { Button } from '../../ui-kit/Button';

const useActiveVariant = (to) => {
  const isMatch = useMatch(to);

  return isMatch ? 'default' : 'background1';
};

export function Link({ to, children }) {
  const navigate = useNavigate();

  const handleOnNavigate = () => {
    navigate(to);
  };

  const activeVariant = useActiveVariant(to);

  return (
    <Button variant={activeVariant} size="small" onClick={handleOnNavigate}>{children}</Button>
  );
}
