import { Button } from '../../ui-kit/Button';
import { Form } from '../../ui-kit/Form';
import { LayoutBox } from '../../ui-kit/LayoutBox';

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
      <LayoutBox>
        <WordFormFields />
        <LayoutBox sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button type="submit">
            Add
          </Button>
        </LayoutBox>
      </LayoutBox>
    </Form>
  );
}
