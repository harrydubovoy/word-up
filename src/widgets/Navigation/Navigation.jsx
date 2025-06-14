import MuiBox from '@mui/material/Box';

import { Link } from './Link';

export function Navigation() {
  return (
    <MuiBox sx={{ display: 'grid' }}>
      <Link to="/">[T] Test</Link>
      <Link to="/dictionary">[D] Dictionary</Link>
      <Link to="/add">[+A] Add</Link>
      <Link to="/archive">[-A] Archive</Link>
      {/*<Link to="/suggested-dictionary">[S] Suggested</Link>*/}
    </MuiBox>
  );
}
