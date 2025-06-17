import { Container } from '../../ui-kit/Container';

import { AddWordForm } from './AddWordForm';

import { FormHandlerProvider } from '../../shared/contextes/FormHandler';

export function AddPage() {
  return (
    <Container>
      <FormHandlerProvider>
        <AddWordForm />
      </FormHandlerProvider>
    </Container>
  );
}
