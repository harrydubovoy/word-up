import { prop } from 'ramda';
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from '../../ui/Button';
import { Box } from '../../ui/Box';
import { Form } from '../../ui/Form';

import Header from './Heder';
import WordPairFormFields from '../../components/WordPairFormFields';
import ScreenBody from '../../screen-components/ScreenBody';
import ScrollContainer from '../../screen-components/ScrollContainer';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  updateOneDictionary,
  selectByIdDictionary,
} from '../../store/reducer/dictionary.slice';

import { getFieldsData, isRequiredFieldsFilled } from '../../utils/form';

import { WORD_PAIR_KEYS } from '../../constants/word';

function EditScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const byIdDictionary = useAppSelector(selectByIdDictionary, id);

  const handleOnBack = () => navigate(-1);

  const handleOnSubmitUpdate = (event) => {
    event.preventDefault();
    const formEventTarget = event.target;

    if (!isRequiredFieldsFilled(formEventTarget)) {
      return null;
    }

    dispatch(updateOneDictionary({ id, changes: getFieldsData(formEventTarget) }));
    handleOnBack();

    return null;
  };

  return (
    <>
      <Header />
      <ScrollContainer>
        <ScreenBody>
          <Form onSubmit={handleOnSubmitUpdate}>
            <WordPairFormFields
              foreign={prop(WORD_PAIR_KEYS.FOREIGN)(byIdDictionary)}
              native={prop(WORD_PAIR_KEYS.NATIVE)(byIdDictionary)}
              transcription={prop(WORD_PAIR_KEYS.TRANSCRIPTION)(byIdDictionary)}
              partOfSpeech={prop(WORD_PAIR_KEYS.PART_OF_SPEECH)(byIdDictionary)}
              description={prop(WORD_PAIR_KEYS.DESCRIPTION)(byIdDictionary)}
            />
            <Box className="flex items-center gap-2 mt-6">
              <Button variant="outlined" className="w-full" onClick={handleOnBack}>
                Cancel
              </Button>
              <Button variant="filled" className="w-full">
                Update
              </Button>
            </Box>
          </Form>
        </ScreenBody>
      </ScrollContainer>
    </>
  );
}

export default EditScreen;
