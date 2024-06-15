import { Outlet } from 'react-router-dom';

import { Box } from './ui/Box';

import './App.css';

import Navigation from './components/Navigation';
import ScreenContainer from './screen-components/ScreenContainer';
import Copyright from './components/Copyright';

function App() {
  return (
    <Box className="flex items-center justify-center bg-catskill-white h-full w-full">
      <Box id="grid" className="h-full w-full max-h-[48rem] max-w-md p-2 gap-2">
        <Box id="gridContent">
          <ScreenContainer>
            <Outlet />
          </ScreenContainer>
        </Box>
        <Box id="gridNavigation">
          <Navigation />
        </Box>
        <Box id="gridCopyright">
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
