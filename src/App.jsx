import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation';
import ScreenContainer from './screen-components/ScreenContainer';
import { AlertProvider } from './components/Alert';

const App = () => (
  <div className="flex items-center justify-center bg-[#f8fafc] h-full w-full">
    <div id="grid" className="h-full w-full max-h-[48rem] max-w-md p-2 gap-2">
      <div id="gridContent" className="rounded-xl shadow-xl shadow-blue-gray-900/5">
        <AlertProvider>
          <ScreenContainer>
            <Outlet />
          </ScreenContainer>
        </AlertProvider>
      </div>
      <div id="gridNavigation" className="rounded-xl shadow-xl shadow-blue-gray-900/5">
        <Navigation />
      </div>
    </div>
  </div>
);

export default App;
