import React from 'react';
import ReactDOM from 'react-dom/client';
import { initDB } from 'react-indexed-db-hook';
import { ThemeProvider } from '@material-tailwind/react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';

import AddScreen from './screen/AddScreen';
import ListScreen from './screen/ListScreen';
import TestScreen from './screen/TestScreen';
import TrashBinScreen from './screen/TrashBinScreen';

import './translations/config';
import dbConfig from './dbConfig';

initDB(dbConfig);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <TestScreen />,
      },
      {
        path: '/add',
        element: <AddScreen />,
      },
      {
        path: '/list',
        element: <ListScreen />,
      },
      {
        path: '/trash',
        element: <TrashBinScreen />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
