import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';

import { defaultTheme, ThemeProvider } from '../ui-kit/theme';

import { router } from './Router';

export function Bootstrap() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
