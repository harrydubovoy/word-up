import { LayoutBox } from '../../ui-kit/LayoutBox';

import { AddWordForm } from './AddWordForm';

import { FormHandlerProvider } from '../../shared/contextes/FormHandler';

export function AddPage() {
  return (
    <LayoutBox sx={{ maxWidth: '90%', margin: '0 auto', padding: '8px 0' }}>
      <FormHandlerProvider>
        <AddWordForm />
      </FormHandlerProvider>
    </LayoutBox>
  );
}
