import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import store from './store';

import App from './App';

import AddScreen from './screen/AddScreen';
import EditScreen from './screen/EditScreen';
import ListScreen from './screen/ListScreen';
import TestScreen from './screen/TestScreen';
import ArchiveScreen from './screen/ArchiveScreen';
import NotFoundScreen from './screen/NotFoundScreen';

import './translations/config';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<TestScreen />} />
    <Route path="add" element={<AddScreen />} />
    <Route path="edit/:id" element={<EditScreen />} />
    <Route path="list" element={<ListScreen />} />
    <Route path="archive" element={<ArchiveScreen />} />
    <Route path="*" element={<NotFoundScreen />} />
  </Route>,
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
