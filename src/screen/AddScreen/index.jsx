import { useRef } from 'react';

import { Button } from '../../ui/Button';
import { Box } from '../../ui/Box';

import Header from './Heder';
import WordPairFormFields from '../../components/WordPairFormFields';
import ScreenBody from '../../screen-components/ScreenBody';
import ScrollContainer from '../../screen-components/ScrollContainer';

import { useTranslation } from '../../translations';
import { ADD_WORD_SCREEN__ACTION_ADD_TO_LIST } from '../../translations/resources/constants';

import { useAppDispatch } from '../../store/hooks';
import { addOneDictionary, dictionaryPayload } from '../../store/reducer/dictionary.slice';

import { getFields, isRequiredFieldsIsNotEmpty } from '../../utils/form';

function AddScreen() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const formRef = useRef(null);

  const handleOnSubmitAdd = (event) => {
    event.preventDefault();

    const fields = getFields(event.target);

    if (!isRequiredFieldsIsNotEmpty(fields)) {
      return null;
    }

    dispatch(addOneDictionary(dictionaryPayload(fields)));
    formRef.current.reset();

    return null;
  };

  return (
    <>
      <Header />
      <ScrollContainer>
        <ScreenBody>
          <form ref={formRef} onSubmit={handleOnSubmitAdd}>
            <WordPairFormFields />
            <Box className="mt-6">
              <Button type="submit" className="w-full">
                {t(ADD_WORD_SCREEN__ACTION_ADD_TO_LIST)}
              </Button>
            </Box>
          </form>
        </ScreenBody>
      </ScrollContainer>
    </>
  );
}

export default AddScreen;
