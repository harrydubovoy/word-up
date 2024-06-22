import { prop } from 'ramda';
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from '../../ui/Button';
import { Box } from '../../ui/Box';

import Header from './Heder';
import WordPairFormFields from '../../components/WordPairFormFields';
import ScreenBody from '../../screen-components/ScreenBody';
import ScrollContainer from '../../screen-components/ScrollContainer';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  updateOneDictionary,
  selectByIdDictionary,
} from '../../store/reducer/dictionary.slice';

import { getFields, isRequiredFieldsIsNotEmpty } from '../../utils/form';

import { WORD_PAIR_KEYS } from '../../constants/word';

function EditScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const byIdDictionary = useAppSelector(selectByIdDictionary, id);

  const handleOnBack = () => navigate(-1);

  const handleOnSubmitUpdate = (event) => {
    event.preventDefault();

    const fields = getFields(event.target);

    if (!isRequiredFieldsIsNotEmpty(fields)) {
      return null;
    }

    dispatch(updateOneDictionary({ id, changes: fields }));
    handleOnBack();

    return null;
  };

  return (
    <>
      <Header />
      <ScrollContainer>
        <ScreenBody>
          <form onSubmit={handleOnSubmitUpdate}>
            <WordPairFormFields
              foreign={prop(WORD_PAIR_KEYS.FOREIGN)(byIdDictionary)}
              native={prop(WORD_PAIR_KEYS.NATIVE)(byIdDictionary)}
              transcription={prop(WORD_PAIR_KEYS.TRANSCRIPTION)(byIdDictionary)}
              partOfSpeech={prop(WORD_PAIR_KEYS.PART_OF_SPEECH)(byIdDictionary)}
              description={prop(WORD_PAIR_KEYS.DESCRIPTION)(byIdDictionary)}
            />
            <Box className="flex items-center gap-2 mt-6">
              <Button type="button" variant="outline" className="w-full" onClick={handleOnBack}>
                Cancel
              </Button>
              <Button type="submit" className="w-full">
                Update
              </Button>
            </Box>
          </form>
        </ScreenBody>
      </ScrollContainer>
    </>
  );
}

export default EditScreen;
