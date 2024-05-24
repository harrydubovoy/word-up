import { map, prop, reverse, has } from 'ramda';

import IconButton from '../../ui/IconButton';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';

import EmptyScreen, { EMPTY_SCREEN_TYPE } from '../EmptyScreen';
import WordPairCard from '../../components/WordPairCard';
import WordPair from '../../components/WordPair';

import TrashSvg from '../../icons/TrashSvg';
import PublicSvg from '../../icons/PublicSvg';
import EditSvg from '../../icons/EditSvg';
import ListAdd from '../../icons/ListAdd';
import ListRemove from '../../icons/ListRemove';

import Header from './Header';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  removeOneDictionary,
  selectEntitiesDictionary,
  selectIdsDictionary,
  selectTotalDictionary,
} from '../../store/reducer/dictionary.slice';
import {
  addOneTestPlan,
  removeOneTestPlan,
  selectEntitiesTestPlan,
} from '../../store/reducer/test-plan.slice';
import { addOneTrashBin } from '../../store/reducer/trash-bin.slice';

import { getNativeWordById, getForeignWordById } from '../../utils/word';
import { openOxfordDictionaryPageByWord } from '../../utils/navigation';

const ListScreen = () => {
  const dispatch = useAppDispatch();
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const entitiesTestPlan = useAppSelector(selectEntitiesTestPlan);
  const idsDictionary = useAppSelector(selectIdsDictionary);
  const totalDictionary = useAppSelector(selectTotalDictionary);

  const handleOnAddToTestPlan = (wordPairId) => () => {
    dispatch(addOneTestPlan({ id: wordPairId }));
  }

  const handleOnRemoveFromTestPlan = (wordPairId) => () => {
    dispatch(removeOneTestPlan(wordPairId));
  }

  const handleOnRemove = (wordPairId) => () => {
    dispatch(addOneTrashBin(prop(wordPairId)(entitiesDictionary)));
    dispatch(removeOneDictionary(wordPairId));
    dispatch(removeOneTestPlan(wordPairId));
  }

  const handleOnOpenDictionary = (wordPairId) => () => {
    openOxfordDictionaryPageByWord(getForeignWordById(entitiesDictionary)(wordPairId))
  }

  return (
    <>
      <Header />
      <ScrollContainer>
        <EmptyScreen type={!totalDictionary && EMPTY_SCREEN_TYPE.DEFAULT}>
          <ScreenBody className="bg-catskill-white">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {map((wordPairId) => (
                  <WordPairCard key={wordPairId}>
                    <WordPairCard.Body
                    >
                      <WordPair
                        isSelected={has(wordPairId)(entitiesTestPlan)}
                        foreign={getForeignWordById(entitiesDictionary)(wordPairId)}
                        native={getNativeWordById(entitiesDictionary)(wordPairId)}
                      />
                    </WordPairCard.Body>
                    <WordPairCard.Footer>
                      <IconButton variant="outlined" size="sm" onClick={handleOnRemove(wordPairId)}>
                        <TrashSvg />
                      </IconButton>
                      <IconButton variant="outlined" size="sm" onClick={handleOnOpenDictionary(wordPairId)}>
                        <PublicSvg />
                      </IconButton>
                      <IconButton variant="outlined" size="sm" disabled>
                        <EditSvg />
                      </IconButton>
                      {entitiesTestPlan[wordPairId] ? (
                        <IconButton size="sm" onClick={handleOnRemoveFromTestPlan(wordPairId)}>
                          <ListRemove />
                        </IconButton>
                      ) : (
                        <IconButton size="sm" onClick={handleOnAddToTestPlan(wordPairId)}>
                          <ListAdd />
                        </IconButton>
                      )}
                    </WordPairCard.Footer>
                  </WordPairCard>
                ), reverse(idsDictionary))}
              </div>
            </div>
          </ScreenBody>
        </EmptyScreen>
      </ScrollContainer>
    </>
  )
}

export default ListScreen;
