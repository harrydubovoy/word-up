import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './App';

import { TestPage } from '../pages/Test';
import { DictionaryPage } from '../pages/Dictionary';
import { ArchivePage } from '../pages/Archive';
import { AddPage } from '../pages/Add';
import { EditPage } from '../pages/Edit';
import { SuggestedDictionaryPage } from '../pages/SuggestedDictionary';

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<TestPage />} />
    <Route path="add" element={<AddPage />} />
    <Route path="edit/:id" element={<EditPage />} />
    <Route path="dictionary" element={<DictionaryPage />} />
    <Route path="archive" element={<ArchivePage />} />
    <Route path="suggested-dictionary" element={<SuggestedDictionaryPage />} />
    {/* <Route path="*" element={<NotFoundScreen />} /> */}
  </Route>,
));
