import { reverse, prop } from 'ramda';
import { Trash, ArchiveRestore } from 'lucide-react';

import { Button } from '../../ui/Button';
import { Box } from '../../ui/Box';

import { List } from '../../util-components/List';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';
import WordPairCard from '../../components/WordPairCard';
import WordPair from '../../components/WordPair';
import EmptyScreen from '../EmptyScreen';

import Header from './Header';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectEntitiesTrashBin,
  selectIdsTrashBin,
  selectTotalTrashBin,
  removeOneTrashBin,
} from '../../store/reducer/trash-bin.slice';
import { addOneDictionary } from '../../store/reducer/dictionary.slice';

import {
  getNativeWordById,
  getForeignWordById,
  getTranscriptionWordById,
  getPartOfSpeechWordById,
} from '../../utils/word';

import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

function TrashBinScreen() {
  const dispatch = useAppDispatch();
  const entitiesTrashBin = useAppSelector(selectEntitiesTrashBin);
  const idsTrashBin = useAppSelector(selectIdsTrashBin);
  const totalTrashBin = useAppSelector(selectTotalTrashBin);

  const handleOnRemove = (wordPairId) => () => {
    dispatch(removeOneTrashBin(wordPairId));
  };

  const handleRestore = (wordPairId) => () => {
    dispatch(addOneDictionary(prop(wordPairId)(entitiesTrashBin)));
    dispatch(removeOneTrashBin(wordPairId));
  };

  return (
    <>
      <Header />
      <EmptyScreen type={!totalTrashBin && EMPTY_SCREEN_TYPE.TRASH_BIN}>
        <ScrollContainer>
          <ScreenBody className="bg-catskill-white">
            <Box className="w-full">
              <Box className="grid grid-cols-1 gap-4">
                <List.Map array={reverse(idsTrashBin)}>
                  {(wordPairId) => (
                    <WordPairCard key={wordPairId}>
                      <WordPairCard.Body>
                        <WordPair
                          native={getNativeWordById(wordPairId)(entitiesTrashBin)}
                          foreign={getForeignWordById(wordPairId)(entitiesTrashBin)}
                          transcription={getTranscriptionWordById(wordPairId)(entitiesTrashBin)}
                          partOfSpeech={getPartOfSpeechWordById(wordPairId)(entitiesTrashBin)}
                        />
                      </WordPairCard.Body>
                      <WordPairCard.Footer className="justify-end gap-2">
                        <Button variant="outline" size="icon" onClick={handleRestore(wordPairId)}>
                          <ArchiveRestore />
                        </Button>
                        <Button size="icon" onClick={handleOnRemove(wordPairId)}>
                          <Trash />
                        </Button>
                      </WordPairCard.Footer>
                    </WordPairCard>
                  )}
                </List.Map>
              </Box>
            </Box>
          </ScreenBody>
        </ScrollContainer>
      </EmptyScreen>
    </>
  );
}

export default TrashBinScreen;
