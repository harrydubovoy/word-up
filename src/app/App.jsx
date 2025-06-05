import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Box } from '../ui-kit/Box';

import { Navigation } from '../widgets/Navigation';
import { Content } from '../ui/Content';
import { Copyright } from '../widgets/Copyright';

import { AsideContentPortalProvider, ADDITIONAL_ASIDE_ID } from '../shared/contextes/AsideContentPortal';

import './App.css';

const getUid7 = () => Math.random().toString(36).substr(6);

const generateId = (postfix) => {
  const parts = [getUid7(), getUid7(), getUid7(), postfix];
  return parts.join('-').toUpperCase();
};

export function migrateDictionaryData() {
  const rawData = localStorage.getItem('word-up-store');
  if (!rawData) {
    console.error('No data found in localStorage under "word-up-store"');
    return;
  }

  const data = JSON.parse(rawData);
  const { dictionary } = data;

  if (!dictionary) {
    console.error('No dictionary data found.');
    return;
  }

  const oldEntities = dictionary.entities || {};
  const newEntities = {};
  const newIds = [];

  Object.values(oldEntities).forEach((entry) => {
    const newId = generateId('A0R1VCE');
    newEntities[newId] = {
      ...entry,
      id: newId,
    };
    newIds.push(newId);
  });

  const newState = {
    state: {
      entities: newEntities,
      ids: newIds,
    },
    version: 0,
  };

  localStorage.setItem('word-up-dictionary-state', JSON.stringify(newState));

  console.log('Migration completed!');
}

export function App() {
  const params = useLocation();

  useEffect(() => {
    if (params.search) {
      migrateDictionaryData();
    }
  }, []);

  return (
    <AsideContentPortalProvider id={ADDITIONAL_ASIDE_ID}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
      >
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gridTemplateRows: '1fr auto',
          maxHeight: '90%',
          height: '100%',
          width: '100%',
          maxWidth: '1124px',
          margin: '0 auto',
          padding: '0 16px',
          gap: '0 16px',
        }}
        >
          <Content sx={{ backgroundColor: '#32473b' }}>
            <Navigation />
          </Content>

          <Content sx={{ backgroundColor: '#e0dfdc', overflow: 'hidden' }}>
            <Box sx={{
              overflowY: 'auto',
              height: '100%',
              margin: '0 -16px',
              padding: '0 16px',
            }}
            >
              <Outlet />
            </Box>
          </Content>

          <div id={ADDITIONAL_ASIDE_ID} />

          <Box sx={{ gridColumn: '2 / 3', gridRow: '2 / 2' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </AsideContentPortalProvider>
  );
}
