import MuiList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';

import { Link } from './Link';
import { styled } from '../../ui-kit/theme';

const Wrap = styled('div')(() => ({
  display: 'grid',
  alignItems: 'center',
  color: '#dceee3',
}));

const List = styled(MuiList)(() => ({
  display: 'grid',
  gap: '8px',
  padding: '0',
}));

export function Navigation() {
  return (
    <Wrap>
      <List>
        <ListItem disablePadding>
          <Link to="/" label="Test" icon={<HomeOutlinedIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <Link to="/dictionary" label="Dictionary" icon={<FormatListBulletedOutlinedIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <Link to="/add" label="Add" icon={<AddOutlinedIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <Link to="/archive" label="Archive" icon={<Inventory2OutlinedIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <Link to="/suggested-dictionary" label="Suggested" icon={<AssistantOutlinedIcon />} />
        </ListItem>
      </List>
    </Wrap>
  );
}
