import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { prop, has, compose, equals } from 'ramda';
import { Globe, Trash, Pencil, FileText, ListPlus, ListMinus } from 'lucide-react';

import { Typography } from '../../ui/Typography';
import { Input } from '../../ui/Input';
import { Box } from '../../ui/Box';
import { Button } from '../../ui/Button';
import { Hr } from '../../ui/Hr';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/Select';

import { If } from '../../util-components/If';
import { List } from '../../util-components/List';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';

import EmptyScreen from '../EmptyScreen';
import WordPairCard from '../../components/WordPairCard';
import WordPair from '../../components/WordPair';

import Header from './Header';

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

  const [descriptionId, setDescriptionId] = useState(-1);

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const dispatch = useAppDispatch();
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const entitiesTestPlan = useAppSelector(selectEntitiesTestPlan);
  const idsDictionary = useAppSelector(selectIdsDictionary);
  const totalDictionary = useAppSelector(selectTotalDictionary);
  const idsTestPlan = useAppSelector(selectIdsTestPlan);

  const { searchString, handleOnSearchChange } = useSearchQuery();
  const { filterValue, handleFilterTypeChange } = useFilterType();
  const { filterSortValue, handleFilterSortChange } = useFilterSort();
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
        <Box className="rounded-t-none p-4 relative z-10">
          <Box className="flex flex-col items-end min-w- justify-between gap-3">
            <Input disabled={!totalDictionary} onChange={handleOnSearchChange} size="md" placeholder="Search" />
            <Box className="flex gap-2 items-center">
              <Box className="flex flex-col gap-1 shrink-0">
                <Select
                  disabled={!totalDictionary}
                  value={filterPartOfSpeechValue}
                  onValueChange={handleFilterPartOfSpeechChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Part of Speech" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        value={FILTER_PART_OF_SPEECH_MAP.ALL.value}
                        onClick={handleFilterPartOfSpeechChange}
                      >
                        {FILTER_PART_OF_SPEECH_MAP.ALL.displayValue}
                      </SelectItem>
                      <List.Map array={availablePartOfSpeech}>
                        {(partOfSpeech) => (
                          <SelectItem
                            key={partOfSpeech}
                            value={partOfSpeech}
                          >
                            {partOfSpeech}
                          </SelectItem>
                        )}
                      </List.Map>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Box>
              <Box className="flex flex-col gap-1 shrink-0">
                <Select
                  disabled={!totalDictionary}
                  value={filterSortValue}
                  onValueChange={handleFilterSortChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={FILTER_SORT_MAP.LATEST.value}>
                        {FILTER_SORT_MAP.LATEST.displayValue}
                      </SelectItem>
                      <SelectItem value={FILTER_SORT_MAP.OLDEST.value}>
                        {FILTER_SORT_MAP.OLDEST.displayValue}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Box>
              <Box className="flex flex-col gap-1 shrink-0">
                <Select
                  disabled={!totalDictionary}
                  value={filterValue}
                  onValueChange={handleFilterTypeChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={FILTER_TYPE_MAP.ALL.value}>
                        {FILTER_TYPE_MAP.ALL.displayValue}
                      </SelectItem>
                      <SelectItem value={FILTER_TYPE_MAP.INCLUDED.value}>
                        {FILTER_TYPE_MAP.INCLUDED.displayValue}
                      </SelectItem>
                      <SelectItem value={FILTER_TYPE_MAP.EXCLUDED.value}>
                        {FILTER_TYPE_MAP.EXCLUDED.displayValue}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Box>
            </Box>
          </Box>
        </Box>
        <Hr />
      </If>

      <EmptyScreen type={getEmptyScreenType({ idsDictionary, filteredIdsDictionary })}>
        <ScrollContainer>
          <ScreenBody className="bg-catskill-white">
            <Box className="w-full">
              <Box className="grid grid-cols-1 gap-4">
                <List.Map array={filteredIdsDictionary}>
                  {(wordPairId) => (
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
                      <WordPairCard.Footer className="justify-end gap-2">
                        <Button type="button" variant="outline" size="icon" onClick={handleOnRemove(wordPairId)}>
                          <Trash />
                        </Button>
                        <Button type="button" variant="outline" size="icon" onClick={handleOnOpenDictionary(wordPairId)}>
                          <Globe />
                        </Button>
                        <Button type="button" variant="outline" size="icon" onClick={handleOnEdit(wordPairId)}>
                          <Pencil />
                        </Button>
                        <Button
                          type="button"
                          disabled={!getDescriptionWordById(wordPairId)(entitiesDictionary)}
                          variant="outline"
                          size="icon"
                          onClick={handleToggleDescription(wordPairId)}
                        >
                          <FileText />
                        </Button>
                        {entitiesTestPlan[wordPairId] ? (
                          <Button type="button" size="icon" onClick={handleOnRemoveFromTestPlan(wordPairId)}>
                            <ListMinus />
                          </Button>
                        ) : (
                          <Button type="button" size="icon" onClick={handleOnAddToTestPlan(wordPairId)}>
                            <ListPlus />
                          </Button>
                        )}
                      </WordPairCard.Footer>
                      <If condition={equals(descriptionId, wordPairId)}>
                        <Box className="pt-4">
                          <Hr className="mb-2" />
                          <Typography variant="small">
                            {getDescriptionWordById(wordPairId)(entitiesDictionary)}
                          </Typography>
                        </Box>
                      </If>
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

export default ListScreen;
