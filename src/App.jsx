import { Outlet } from 'react-router-dom';

import { Box } from './ui/Box';
import { Hr } from './ui/Hr';
import { Container } from './ui/Container';
import { ThemeButton } from './components/ThemeButton';

import { useTheme } from './hooks/useTheme';

import './App.css';

import Navigation from './components/Navigation';
import { ScreenContainer } from './screen-components/ScreenContainer';
import Copyright from './components/Copyright';

function App() {
  useTheme();

  return (
    <Box className="flex items-center justify-center h-full w-full">
      <Box className="absolute top-2 right-2">
        <ThemeButton />
      </Box>
      <Box className="flex flex-col h-full w-full max-w-md md:p-2 gap-3">
        <ScreenContainer className="bg-secondary">
          <Outlet />
          <Hr />
          <Box className="py-4 shrink-0 overflow-hidden bg-secondary">
            <Container>
              <Navigation />
            </Container>
          </Box>
        </ScreenContainer>
        <Copyright />
      </Box>
    </Box>
  );
}

export default App;
