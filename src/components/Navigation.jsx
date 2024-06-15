import { useLocation, useNavigate, matchPath } from 'react-router-dom';
import { Home, List, Plus, Trash2 } from 'lucide-react';

import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Box } from '../ui/Box';

function Link({ to, children, className, ...props }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const variant = matchPath(pathname, to) ? 'secondary' : 'ghost';

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
    <Card className="py-4 overflow-hidden">
      <Container>
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
          <Link to="/trash">
            <Trash2 />
          </Link>
        </Box>
      </Container>
    </Card>
  );
}

export default Navigation;
