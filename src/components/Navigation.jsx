import { useNavigate, useMatch } from 'react-router-dom';
import Home from '@material-design-icons/svg/outlined/home.svg';
import List from '@material-design-icons/svg/outlined/list.svg';
import Add from '@material-design-icons/svg/outlined/add.svg';
import Archive from '@material-design-icons/svg/outlined/archive.svg';

import { ButtonIcon } from '../ui/Button';
import { Box } from '../ui/Box';

function Link({ to, children, className, ...props }) {
  const navigate = useNavigate();
  const isMatch = useMatch(to);
  const variant = isMatch ? 'tonal' : 'text';

  const handleOnNavigate = () => {
    navigate(to);
  };

  return (
    <ButtonIcon {...props} onClick={handleOnNavigate} variant={variant} className={className}>
      {children}
    </ButtonIcon>
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
        <Add />
      </Link>
      <Link to="/archive">
        <Archive />
      </Link>
    </Box>
  );
}

export default Navigation;
