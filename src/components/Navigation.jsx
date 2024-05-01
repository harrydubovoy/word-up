import { Link, useLocation } from 'react-router-dom';

import Container from '../ui/Container';
import { List, ListItem } from '../ui/List';
import Card from '../ui/Card';

import HomeSvg from '../icons/HomeSvg';
import ListSvg from '../icons/ListSvg';
import AddSvg from '../icons/AddSvg';
import TrashSvg from '../icons/TrashSvg';

const Navigation = () => {
  const location = useLocation();

  return (
    <Card shadow={false}>
      <Container>
        <List className="flex flex-row justify-between px-0 py-2">
          <Link to="">
            <ListItem selected={location.pathname === '/'}>
              <HomeSvg />
            </ListItem>
          </Link>
          <Link to="list">
            <ListItem selected={location.pathname === '/list'}>
              <ListSvg />
            </ListItem>
          </Link>
          <Link to="add">
            <ListItem selected={location.pathname === '/add'}>
              <AddSvg />
            </ListItem>
          </Link>
          <Link to="trash">
            <ListItem selected={location.pathname === '/trash'}>
              <TrashSvg />
            </ListItem>
          </Link>
        </List>
      </Container>
    </Card>
  );
}

export default Navigation;
