import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#32473b',
    },
    jetStream: '#afd0c9',
    lunarGreen: '#384135',
  },
});

export { theme, ThemeProvider, CssBaseline, styled };
