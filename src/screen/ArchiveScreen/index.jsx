import { useRef } from 'react';
import { reverse, prop } from 'ramda';
import { Trash, ArchiveRestore } from 'lucide-react';

import { Button } from '../../ui/Button';
import { Box } from '../../ui/Box';

import { List } from '../../util-components/List';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';
import WordPairCard from '../../components/WordPairCard';
import { WordPairCardMotion } from '../../components/WordPairCard/WordPairCardMotion';
import WordPair from '../../components/WordPair';
import EmptyScreen from '../EmptyScreen';

import Header from './Header';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectEntitiesArchive,
  selectIdsArchive,
  selectTotalArchive,
  removeOneArchive,
} from '../../store/reducer/archive.slice';
import { addOneDictionary } from '../../store/reducer/dictionary.slice';

import {
  getNativeWordById,
  getForeignWordById,
  getTranscriptionWordById,
  getPartOfSpeechWordById,
} from '../../utils/word';

import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

function ArchiveScreen() {
  const scrollRef = useRef(null);
  const dispatch = useAppDispatch();
  const entitiesTrashBin = useAppSelector(selectEntitiesArchive);
  const idsTrashBin = useAppSelector(selectIdsArchive);
  const totalTrashBin = useAppSelector(selectTotalArchive);

  const handleOnRemove = (wordPairId) => () => {
    dispatch(removeOneArchive(wordPairId));
  };

  const handleRestore = (wordPairId) => () => {
    dispatch(addOneDictionary(prop(wordPairId)(entitiesTrashBin)));
    dispatch(removeOneArchive(wordPairId));
  };

  return (
    <>
      <Header />
      <EmptyScreen type={!totalTrashBin && EMPTY_SCREEN_TYPE.ARCHIVE}>
        <ScrollContainer ref={scrollRef}>
          <ScreenBody>
            <Box className="w-full">
              <Box className="grid grid-cols-1 gap-4">
                <List.Map array={reverse(idsTrashBin)}>
                  {(wordPairId) => (
                    <WordPairCardMotion key={wordPairId} scrollRef={scrollRef}>
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
                    </WordPairCardMotion>
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

export default ArchiveScreen;
