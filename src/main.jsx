import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import store from './store';

import App from './App';

import AddScreen from './screen/AddScreen';
import EditScreen from './screen/EditScreen';
import ListScreen from './screen/ListScreen';
import TestScreen from './screen/TestScreen';
import TrashBinScreen from './screen/TrashBinScreen';
import NotFoundScreen from './screen/NotFoundScreen';

import './translations/config';

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
        path: '/edit/:id',
        element: <EditScreen />,
      },
      {
        path: '/list',
        element: <ListScreen />,
      },
      {
        path: '/trash',
        element: <TrashBinScreen />,
      },
      {
        path: '*',
        element: <NotFoundScreen />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
