import { ThemeProvider, css } from '@emotion/react';
import styled from '@emotion/styled';

const defaultTheme = {
  spacing: (factor) => `${factor * 8}px`,
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
};

export { ThemeProvider, styled, css, defaultTheme };
