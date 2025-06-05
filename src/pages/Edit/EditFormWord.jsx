import { useNavigate } from 'react-router-dom';

import { Stack } from '../../ui-kit/Stack';
import { Button } from '../../ui-kit/Button';
import { Form } from '../../ui-kit/Form';

import { WordFormFields } from '../../widgets/WordFormFields';

import { useFormHandlerContext } from '../../shared/contextes/FormHandler';
import { useEditController } from './useEditController';

export function EditFormWord() {
  const navigate = useNavigate();
  const { values } = useFormHandlerContext();

  const { handleUpdateEntity } = useEditController();

  const handleOnBack = () => navigate(-1);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleUpdateEntity({ data: values });
        handleOnBack();
      }}
    >
      <Stack spacing={3}>
        <WordFormFields />
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" fullWidth type="button" onClick={handleOnBack}>
            Cancel
          </Button>
          <Button variant="contained" fullWidth type="submit">
            Update
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
}
