import MuiBox from '@mui/material/Box';

import { AddWordForm } from './AddWordForm';

import { FormHandlerProvider } from '../../shared/contextes/FormHandler';

export function AddPage() {
  return (
    <MuiBox sx={{ maxWidth: '90%', margin: '0 auto', padding: '8px 0' }}>
      <FormHandlerProvider>
        <AddWordForm />
      </FormHandlerProvider>
    </MuiBox>
  );
}
