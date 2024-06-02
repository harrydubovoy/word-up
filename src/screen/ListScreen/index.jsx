import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { map, prop, reverse, has, compose, length, equals } from 'ramda';

import classNames from 'classnames';
import IconButton from '../../ui/IconButton';
import Input from '../../ui/Input';
import { Typography } from '../../ui/Typography';
import { Menu, MenuItem, MenuHandler, MenuList } from '../../ui/Menu';
import Button from '../../ui/Button';
import { Navbar } from '../../ui/Navbar';

import { FlipCard } from '../../components/FlipCard';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';

import EmptyScreen from '../EmptyScreen';
import WordPairCard from '../../components/WordPairCard';
import WordPair from '../../components/WordPair';

import TrashSvg from '../../icons/TrashSvg';
import PublicSvg from '../../icons/PublicSvg';
import EditSvg from '../../icons/EditSvg';
import ListAdd from '../../icons/ListAdd';
import ListRemove from '../../icons/ListRemove';

import useSearchQuery from '../../hooks/useSearchQuery';
import useFilterType from '../../hooks/useFilterType';

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
  selectIdsTestPlan,
} from '../../store/reducer/test-plan.slice';
import { addOneTrashBin } from '../../store/reducer/trash-bin.slice';

import {
  getNativeWordById,
  getForeignWordById,
  getTranscriptionWordById,
  getPartOfSpeechWordById,
  getDescriptionWordById,
} from '../../utils/word';
import { openOxfordDictionaryPageByWord } from '../../utils/navigation';
import { filterByType, filterBySearchString } from '../../utils/filter';

import { FILTER_MAP } from '../../constants/filter';
import { EMPTY_SCREEN_TYPE } from '../../constants/screens';

function ListScreen() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const entitiesTestPlan = useAppSelector(selectEntitiesTestPlan);
  const idsDictionary = useAppSelector(selectIdsDictionary);
  const totalDictionary = useAppSelector(selectTotalDictionary);
  const idsTestPlan = useAppSelector(selectIdsTestPlan);

  const [isActiveById, setIsActiveById] = useState(0);

  const handleToggleActiveById = (id) => () => {
    setIsActiveById((prevId) => (equals(prevId, id) ? 0 : id));
  };

  const { searchString, handleOnSearchChange } = useSearchQuery();
  const { filterValue, filterDisplayValue, handleFilterTypeChange } = useFilterType();

  const handleOnAddToTestPlan = (wordPairId) => (event) => {
    event.stopPropagation();
    dispatch(addOneTestPlan({ id: wordPairId }));
  };

  const handleOnRemoveFromTestPlan = (wordPairId) => (event) => {
    event.stopPropagation();
    dispatch(removeOneTestPlan(wordPairId));
  };

  const handleOnRemove = (wordPairId) => (event) => {
    event.stopPropagation();
    dispatch(addOneTrashBin(prop(wordPairId)(entitiesDictionary)));
    dispatch(removeOneDictionary(wordPairId));
    dispatch(removeOneTestPlan(wordPairId));
  };

  const handleOnEdit = (wordPairId) => (event) => {
    event.stopPropagation();
    navigate(`/edit/${wordPairId}`);
  };

  const handleOnOpenDictionary = (wordPairId) => (event) => {
    event.stopPropagation();
    openOxfordDictionaryPageByWord(getForeignWordById(wordPairId)(entitiesDictionary));
  };

  const filteredIdsDictionary = compose(
    reverse,
    filterBySearchString(searchString, { entities: entitiesDictionary }),
    filterByType(filterValue, { includedIds: idsTestPlan }),
  )(idsDictionary);

  return (
    <>
      <Header />
      <ScrollContainer>
        <Navbar className="rounded-t-none sticky top-0 z-10 p-4">
          <div className="flex items-center justify-between gap-3">
            <Input disabled={!totalDictionary} onChange={handleOnSearchChange} size="md" label="Search" />
            <div className="shrink-0">
              <Menu placement="top-end">
                <MenuHandler>
                  <Button disabled={!totalDictionary}>{filterDisplayValue}</Button>
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
        <EmptyScreen type={!length(filteredIdsDictionary) && EMPTY_SCREEN_TYPE.DEFAULT}>
          <ScreenBody className="bg-catskill-white">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {map((wordPairId) => (
                  <FlipCard
                    className={classNames('h-36', {
                      'cursor-pointer': getDescriptionWordById(wordPairId)(entitiesDictionary) })}
                    isToggled={
                    getDescriptionWordById(wordPairId)(entitiesDictionary)
                      && equals(isActiveById, wordPairId)
                    }
                    key={wordPairId}
                    renderFront={({ frontClassName }) => (
                      <WordPairCard
                        onClick={handleToggleActiveById(wordPairId)}
                        className={frontClassName}
                      >
                        <WordPairCard.Body>
                          <WordPair
                            isSelected={has(wordPairId)(entitiesTestPlan)}
                            foreign={getForeignWordById(wordPairId)(entitiesDictionary)}
                            native={getNativeWordById(wordPairId)(entitiesDictionary)}
                            transcription={getTranscriptionWordById(wordPairId)(entitiesDictionary)}
                            partOfSpeech={getPartOfSpeechWordById(wordPairId)(entitiesDictionary)}
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
                    )}
                    renderBack={({ backClassName }) => (
                      <WordPairCard
                        onClick={handleToggleActiveById(wordPairId)}
                        className={backClassName}
                      >
                        <WordPairCard.Body>
                          <Typography variant="paragraph" color="blue-gray" className="text-left">
                            {getDescriptionWordById(wordPairId)(entitiesDictionary)}
                          </Typography>
                        </WordPairCard.Body>
                      </WordPairCard>
                    )}
                  />
                ), filteredIdsDictionary)}
              </div>
            </div>
          </ScreenBody>
        </EmptyScreen>
      </ScrollContainer>
    </>
  );
}

export default ListScreen;
