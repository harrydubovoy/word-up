import { Box } from '../../ui-kit/Box';

import { AddWordForm } from './AddWordForm';

import { FormHandlerProvider } from '../../shared/contextes/FormHandler';

export function AddPage() {
  return (
    <Box sx={{ maxWidth: '80%', margin: '0 auto', padding: '8px 0' }}>
      <FormHandlerProvider>
        <AddWordForm />
      </FormHandlerProvider>
    </Box>
  );
}
