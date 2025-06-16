import { useNavigate } from 'react-router-dom';

import { LayoutBox } from '../../ui-kit/LayoutBox';
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
      <LayoutBox>
        <WordFormFields />
        <LayoutBox sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '8px' }}>
          <Button type="button" onClick={handleOnBack}>
            Cancel
          </Button>
          <Button type="submit">
            Update
          </Button>
        </LayoutBox>
      </LayoutBox>
    </Form>
  );
}
