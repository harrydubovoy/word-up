import { useNavigate, useMatch } from 'react-router-dom';
import { Home, List, Plus, Archive } from 'lucide-react';

import { Button } from '../ui/Button';
import { Box } from '../ui/Box';

function Link({ to, children, className, ...props }) {
  const navigate = useNavigate();
  const isMatch = useMatch(to);
  const variant = isMatch ? 'secondary' : 'ghost';

  const handleOnNavigate = () => {
    navigate(to);
  };

  return (
    <Button {...props} size="icon" onClick={handleOnNavigate} variant={variant} className={className}>
      {children}
    </Button>
  );
}

function Navigation() {
  return (
    <Box className="flex justify-between">
      <Link to="/">
        <Home />
      </Link>
      <Link to="/list">
        <List />
      </Link>
      <Link to="/add">
        <Plus />
      </Link>
      <Link to="/archive">
        <Archive />
      </Link>
    </Box>
  );
}

export default Navigation;
