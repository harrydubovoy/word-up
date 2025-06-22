import { useMatch, useNavigate } from 'react-router-dom';

import MuiListItemButton from '@mui/material/ListItemButton';
import { styled } from '../../ui-kit/theme';

const ListItemButton = styled(MuiListItemButton)(() => ({
  borderRadius: '8px',
}));

const useActiveLinkStyle = (to) => {
  const isMatch = useMatch(to);

  return {
    backgroundColor: isMatch ? 'rgba(0, 0, 0, 0.2)' : 'inherit',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  };
};

export function Link({ to, icon }) {
  const navigate = useNavigate();

  const handleOnNavigate = () => {
    navigate(to);
  };

  const isActiveStyle = useActiveLinkStyle(to);

  return (
    <ListItemButton sx={{ ...isActiveStyle }} onClick={handleOnNavigate}>
      {icon}
    </ListItemButton>
  );
}
