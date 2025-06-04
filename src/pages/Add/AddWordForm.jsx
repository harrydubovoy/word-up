import { Stack } from '../../ui-kit/Stack';
import { Button } from '../../ui-kit/Button';
import { Form } from '../../ui-kit/Form';

import { useFormHandlerContext } from '../../shared/contextes/FormHandler';

import { WordFormFields } from '../../widgets/WordFormFields';
import { useAddController } from './useAddController';

export function AddWordForm() {
  const { reset, values } = useFormHandlerContext();

  const { handleCreateOneEntity } = useAddController();

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleCreateOneEntity({ data: values });
        reset();
      }}
    >
      <Stack spacing={3}>
        <WordFormFields />
        <Button variant="contained" fullWidth type="submit">
          Add
        </Button>
      </Stack>
    </Form>
  );
}
