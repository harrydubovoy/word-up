import { useMemo } from 'react';

import { useNavigate } from 'react-router-dom';
import { map, prop, reverse, has, compose, length } from 'ramda';

import IconButton from '../../ui/IconButton';
import Input from '../../ui/Input';
import { Menu, MenuItem, MenuHandler, MenuList } from '../../ui/Menu';
import Button from '../../ui/Button';
import { Navbar } from '../../ui/Navbar';

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

import useSearchQuery from '../../hooks/useSearchQuery'
import useFilterType from '../../hooks/useFilterType'

import Header from './Header';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  removeOneDictionary,
  selectEntitiesDictionary,
  selectIdsDictionary,
} from '../../store/reducer/dictionary.slice';
import {
  addOneTestPlan,
  removeOneTestPlan,
  selectEntitiesTestPlan,
  selectIdsTestPlan,
} from '../../store/reducer/test-plan.slice';
import { addOneTrashBin } from '../../store/reducer/trash-bin.slice';

import { getNativeWordById, getForeignWordById, getTranscriptionWordById } from '../../utils/word';
import { openOxfordDictionaryPageByWord } from '../../utils/navigation';
import { filterByType, filterBySearchString } from '../../utils/filter';

import { FILTER_MAP } from '../../constants/filter';

const ListScreen = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const entitiesTestPlan = useAppSelector(selectEntitiesTestPlan);
  const idsDictionary = useAppSelector(selectIdsDictionary);
  const idsTestPlan = useAppSelector(selectIdsTestPlan);

  const { searchString, handleOnSearchChange } = useSearchQuery();
  const { filterValue, filterDisplayValue, handleFilterTypeChange, } = useFilterType();

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

  const handleOnEdit = (wordPairId) => () => {
    navigate(`/edit/${wordPairId}`);
  }

  const handleOnOpenDictionary = (wordPairId) => () => {
    openOxfordDictionaryPageByWord(getForeignWordById(wordPairId)(entitiesDictionary))
  }

  const data = useMemo(() => (
    compose(
      filterBySearchString(searchString, { entities: entitiesDictionary }),
      filterByType(filterValue, { includedIds: idsTestPlan }),
    )(idsDictionary)
  ), [idsDictionary, idsTestPlan, searchString, filterValue, entitiesDictionary]);

  return (
    <>
      <Header />
      <ScrollContainer>
        <Navbar className="rounded-t-none sticky top-0 z-10 p-4">
          <div className="flex items-center justify-between gap-3">
            <Input onChange={handleOnSearchChange} size="md" label="Search" />
            <div className="shrink-0">
              <Menu placement="top-end">
                <MenuHandler>
                  <Button>{filterDisplayValue}</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={handleFilterTypeChange(FILTER_MAP.ALL.value)}>
                    {FILTER_MAP.ALL.displayValue}
                  </MenuItem>
                  <MenuItem onClick={handleFilterTypeChange(FILTER_MAP.INCLUDED.value)}>
                    {FILTER_MAP.INCLUDED.displayValue}
                  </MenuItem>
                  <MenuItem onClick={handleFilterTypeChange(FILTER_MAP.EXCLUDED.value)}>
                    {FILTER_MAP.EXCLUDED.displayValue}
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </Navbar>
        <EmptyScreen type={!length(data) && EMPTY_SCREEN_TYPE.DEFAULT}>
          <ScreenBody className="bg-catskill-white">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {map((wordPairId) => (
                  <WordPairCard key={wordPairId}>
                    <WordPairCard.Body
                    >
                      <WordPair
                        isSelected={has(wordPairId)(entitiesTestPlan)}
                        foreign={getForeignWordById(wordPairId)(entitiesDictionary)}
                        native={getNativeWordById(wordPairId)(entitiesDictionary)}
                        transcription={getTranscriptionWordById(entitiesDictionary)(wordPairId)}
                      />
                    </WordPairCard.Body>
                    <WordPairCard.Footer>
                      <IconButton variant="outlined" size="sm" onClick={handleOnRemove(wordPairId)}>
                        <TrashSvg />
                      </IconButton>
                      <IconButton variant="outlined" size="sm" onClick={handleOnOpenDictionary(wordPairId)}>
                        <PublicSvg />
                      </IconButton>
                      <IconButton variant="outlined" size="sm" onClick={handleOnEdit(wordPairId)}>
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
                ), reverse(data))}
              </div>
            </div>
          </ScreenBody>
        </EmptyScreen>
      </ScrollContainer>
    </>
  )
}

export default ListScreen;
