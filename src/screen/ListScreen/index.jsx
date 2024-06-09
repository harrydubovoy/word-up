import { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { map, prop, has, compose, equals } from 'ramda';

import { IconButton } from '../../ui/IconButton';
import { Typography } from '../../ui/Typography';
import { Input } from '../../ui/Input';
import { Menu, MenuItem, MenuHandler, MenuList } from '../../ui/Menu';
import { Button } from '../../ui/Button';
import { Navbar } from '../../ui/Navbar';
import { Hr } from '../../ui/Hr';

import If from '../../util-components/If';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';

import EmptyScreen from '../EmptyScreen';
import WordPairCard from '../../components/WordPairCard';
import WordPair from '../../components/WordPair';

import Header from './Header';

import TrashSvg from '../../icons/TrashSvg';
import PublicSvg from '../../icons/PublicSvg';
import EditSvg from '../../icons/EditSvg';
import ListAdd from '../../icons/ListAdd';
import ListRemove from '../../icons/ListRemove';
import DescriptionSvg from '../../icons/DescriptionSvg';

import useSearchQuery from '../../hooks/useSearchQuery';
import useFilterType from '../../hooks/useFilterType';
import useFilterSort from '../../hooks/useFilterSort';
import useFilterPartOfSpeech from '../../hooks/useFilterPartOfSpeech';

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
import { openExternalDictionaryPageByWord } from '../../utils/navigation';
import { filterByType, filterBySearchString, filterBySort, filterByPartOfSpeech } from '../../utils/filter';
import { reverseValue, getUniqueValuesByField } from '../../utils/data';
import { getEmptyScreenType } from './utils';

import {
  FILTER_TYPE_MAP,
  FILTER_SORT_MAP,
  FILTER_PART_OF_SPEECH_MAP,
} from '../../constants/filter';
import { WORD_PAIR_KEYS } from '../../constants/word';

const getAvailablePartOfSpeech = getUniqueValuesByField(WORD_PAIR_KEYS.PART_OF_SPEECH);

function ListScreen() {
  const navigate = useNavigate();

  const drawerRef = useRef(null);
  const [descriptionId, setDescriptionId] = useState(-1);

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const dispatch = useAppDispatch();
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const entitiesTestPlan = useAppSelector(selectEntitiesTestPlan);
  const idsDictionary = useAppSelector(selectIdsDictionary);
  const totalDictionary = useAppSelector(selectTotalDictionary);
  const idsTestPlan = useAppSelector(selectIdsTestPlan);

  const { searchString, handleOnSearchChange } = useSearchQuery();
  const { filterValue, filterDisplayValue, handleFilterTypeChange } = useFilterType();
  const { filterSortValue, filterSortDisplayValue, handleFilterSortChange } = useFilterSort();
  const { filterPartOfSpeechValue, handleFilterPartOfSpeechChange } = useFilterPartOfSpeech();

  const handleToggleDescription = (id) => () => {
    setDescriptionId((prev) => (prev === id ? -1 : id));
  };

  const handleOnClickOpenFilter = () => {
    setIsFilterVisible(reverseValue);
  };

  const handleOnAddToTestPlan = (wordPairId) => () => {
    dispatch(addOneTestPlan({ id: wordPairId }));
  };

  const handleOnRemoveFromTestPlan = (wordPairId) => () => {
    dispatch(removeOneTestPlan(wordPairId));
  };

  const handleOnRemove = (wordPairId) => () => {
    dispatch(addOneTrashBin(prop(wordPairId)(entitiesDictionary)));
    dispatch(removeOneDictionary(wordPairId));
    dispatch(removeOneTestPlan(wordPairId));
  };

  const handleOnEdit = (wordPairId) => () => {
    navigate(`/edit/${wordPairId}`);
  };

  const handleOnOpenDictionary = (wordPairId) => () => {
    openExternalDictionaryPageByWord(getForeignWordById(wordPairId)(entitiesDictionary));
  };

  const availablePartOfSpeech = useMemo(
    () => getAvailablePartOfSpeech(entitiesDictionary),
    [entitiesDictionary],
  );

  const filteredIdsDictionary = compose(
    filterBySort(filterSortValue),
    filterByPartOfSpeech(filterPartOfSpeechValue, { entities: entitiesDictionary }),
    filterBySearchString(searchString, { entities: entitiesDictionary }),
    filterByType(filterValue, { includedIds: idsTestPlan }),
  )(idsDictionary);

  return (
    <>
      <Header onClickOpenFilter={handleOnClickOpenFilter} />

      <If condition={isFilterVisible}>
        <Navbar className="rounded-t-none p-4 relative z-10">
          <div className="flex flex-col items-end min-w- justify-between gap-3">
            <Input disabled={!totalDictionary} onChange={handleOnSearchChange} size="md" label="Search" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1 shrink-0">
                <span className="text-xs text-gray-600 px-4">Part of Speech</span>
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Button size="sm" disabled={!totalDictionary}>
                      {filterPartOfSpeechValue}
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem
                      onClick={handleFilterPartOfSpeechChange(FILTER_PART_OF_SPEECH_MAP.ALL.value)}
                    >
                      {FILTER_PART_OF_SPEECH_MAP.ALL.displayValue}
                    </MenuItem>
                    {map((partOfSpeech) => (
                      <MenuItem
                        className="first-letter-uppercase"
                        key={partOfSpeech}
                        onClick={handleFilterPartOfSpeechChange(partOfSpeech)}
                      >
                        {partOfSpeech}
                      </MenuItem>
                    ))(availablePartOfSpeech)}
                  </MenuList>
                </Menu>
              </div>
              <div className="flex flex-col gap-1 shrink-0">
                <span className="text-xs text-gray-600 px-4">Sort</span>
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Button size="sm" disabled={!totalDictionary}>
                      {filterSortDisplayValue}
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem onClick={handleFilterSortChange(FILTER_SORT_MAP.LATEST.value)}>
                      {FILTER_SORT_MAP.LATEST.displayValue}
                    </MenuItem>
                    <MenuItem onClick={handleFilterSortChange(FILTER_SORT_MAP.OLDEST.value)}>
                      {FILTER_SORT_MAP.OLDEST.displayValue}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <div className="flex flex-col gap-1 shrink-0">
                <span className="text-xs text-gray-600 px-4">Status</span>
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <Button size="sm" disabled={!totalDictionary}>
                      {filterDisplayValue}
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem onClick={handleFilterTypeChange(FILTER_TYPE_MAP.ALL.value)}>
                      {FILTER_TYPE_MAP.ALL.displayValue}
                    </MenuItem>
                    <MenuItem onClick={handleFilterTypeChange(FILTER_TYPE_MAP.INCLUDED.value)}>
                      {FILTER_TYPE_MAP.INCLUDED.displayValue}
                    </MenuItem>
                    <MenuItem onClick={handleFilterTypeChange(FILTER_TYPE_MAP.EXCLUDED.value)}>
                      {FILTER_TYPE_MAP.EXCLUDED.displayValue}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </Navbar>
      </If>

      <EmptyScreen type={getEmptyScreenType({ idsDictionary, filteredIdsDictionary })}>
        <ScrollContainer>
          <ScreenBody className="bg-catskill-white">
            <div ref={drawerRef} className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {map((wordPairId) => (
                  <WordPairCard key={wordPairId}>
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
                      <IconButton
                        disabled={!getDescriptionWordById(wordPairId)(entitiesDictionary)}
                        variant="outlined"
                        size="sm"
                        onClick={handleToggleDescription(wordPairId)}
                      >
                        <DescriptionSvg />
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
                    <If condition={equals(descriptionId, wordPairId)}>
                      <div className="pt-4">
                        <Hr className="pb-2" />
                        <Typography variant="small" color="blue-gray">
                          {getDescriptionWordById(wordPairId)(entitiesDictionary)}
                        </Typography>
                      </div>
                    </If>
                  </WordPairCard>
                ), filteredIdsDictionary)}
              </div>
            </div>
          </ScreenBody>
        </ScrollContainer>
      </EmptyScreen>
    </>
  );
}

export default ListScreen;
