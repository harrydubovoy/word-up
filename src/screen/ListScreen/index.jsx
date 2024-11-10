import { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { prop, has, compose, equals } from 'ramda';
import AddSvg from '@material-design-icons/svg/outlined/add.svg';
import RemoveSvg from '@material-design-icons/svg/outlined/remove.svg';
import InventorySvg from '@material-design-icons/svg/outlined/inventory_2.svg';
import EditSvg from '@material-design-icons/svg/outlined/edit.svg';
import DescriptionSvg from '@material-design-icons/svg/outlined/description.svg';
import PublicSvg from '@material-design-icons/svg/outlined/public.svg';

import { TextField } from '../../ui/TextField';
import { Box } from '../../ui/Box';
import { ButtonIcon, Button } from '../../ui/Button';
import { Sheet } from '../../ui/Sheet';
import { Container } from '../../ui/Container';
import { Typography } from '../../ui/Typography';

import { List } from '../../util-components/List';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';

import EmptyScreen from '../EmptyScreen';
import WordPairCard from '../../components/WordPairCard';
import WordPair from '../../components/WordPair';
import { WordPairCardMotion } from '../../components/WordPairCard/WordPairCardMotion';

import { Header } from './Header';
import { Description } from './Description';

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
import { addOneArchive } from '../../store/reducer/archive.slice';

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
  // FILTER_PART_OF_SPEECH_MAP,
} from '../../constants/filter';
import { WORD_PAIR_KEYS } from '../../constants/word';

const getAvailablePartOfSpeech = getUniqueValuesByField(WORD_PAIR_KEYS.PART_OF_SPEECH);

function ListScreen() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [descriptionId, setDescriptionId] = useState(-1);

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const dispatch = useAppDispatch();
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const entitiesTestPlan = useAppSelector(selectEntitiesTestPlan);
  const idsDictionary = useAppSelector(selectIdsDictionary);
  const idsTestPlan = useAppSelector(selectIdsTestPlan);

  const { searchString, handleOnSearchChange } = useSearchQuery();
  const { filterValue, handleFilterTypeChange } = useFilterType();
  const { filterSortValue, handleFilterSortChange } = useFilterSort();
  const { filterPartOfSpeechValue } = useFilterPartOfSpeech();

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
    dispatch(addOneArchive(prop(wordPairId)(entitiesDictionary)));
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

      {isFilterVisible && (
        <Sheet onClose={handleOnClickOpenFilter}>
          <Container>
            <Box className="flex flex-col items-end rjustify-between gap-4">
              <Box className="w-full">
                <TextField
                  type="search"
                  label="Search"
                  variant="outlined"
                  onChange={handleOnSearchChange}
                  placeholder="Search"
                />
              </Box>
              <Box>
                <Typography variant="h6">Show:&nbsp;&nbsp;</Typography>
                <Button
                  onClick={() => handleFilterTypeChange(FILTER_TYPE_MAP.ALL.value)}
                  variant={filterValue === FILTER_TYPE_MAP.ALL.value ? 'tonal' : 'text'}
                >
                  {FILTER_TYPE_MAP.ALL.displayValue}
                </Button>
                <Button
                  onClick={() => handleFilterTypeChange(FILTER_TYPE_MAP.INCLUDED.value)}
                  variant={filterValue === FILTER_TYPE_MAP.INCLUDED.value ? 'tonal' : 'text'}
                >
                  {FILTER_TYPE_MAP.INCLUDED.displayValue}
                </Button>
                <Button
                  onClick={() => handleFilterTypeChange(FILTER_TYPE_MAP.EXCLUDED.value)}
                  variant={filterValue === FILTER_TYPE_MAP.EXCLUDED.value ? 'tonal' : 'text'}
                >
                  {FILTER_TYPE_MAP.EXCLUDED.displayValue}
                </Button>
              </Box>
              <Box>
                <Typography variant="h6">Sort by:&nbsp;&nbsp;</Typography>
                <Button
                  onClick={() => handleFilterSortChange(FILTER_SORT_MAP.LATEST.value)}
                  variant={filterSortValue === FILTER_SORT_MAP.LATEST.value ? 'tonal' : 'text'}
                >
                  {FILTER_SORT_MAP.LATEST.displayValue}
                </Button>
                <Button
                  onClick={() => handleFilterSortChange(FILTER_SORT_MAP.OLDEST.value)}
                  variant={filterSortValue === FILTER_SORT_MAP.OLDEST.value ? 'tonal' : 'text'}
                >
                  {FILTER_SORT_MAP.OLDEST.displayValue}
                </Button>
              </Box>
            </Box>
          </Container>
        </Sheet>
      )}

      <ScrollContainer ref={scrollRef}>
        <EmptyScreen type={getEmptyScreenType({ idsDictionary, filteredIdsDictionary })}>
          <ScreenBody>
            <Box className="w-full">
              <Box className="grid grid-cols-1 gap-4">
                <List.Map array={filteredIdsDictionary}>
                  {(wordPairId) => (
                    <WordPairCardMotion key={wordPairId} scrollRef={scrollRef}>
                      <WordPairCard>
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
                          <ButtonIcon variant="outlined" onClick={handleOnRemove(wordPairId)}>
                            <InventorySvg />
                          </ButtonIcon>
                          <ButtonIcon variant="outlined" onClick={handleOnOpenDictionary(wordPairId)}>
                            <PublicSvg />
                          </ButtonIcon>
                          <ButtonIcon variant="outlined" onClick={handleOnEdit(wordPairId)}>
                            <EditSvg />
                          </ButtonIcon>
                          <ButtonIcon
                            disabled={!getDescriptionWordById(wordPairId)(entitiesDictionary)}
                            variant="outlined"
                            onClick={handleToggleDescription(wordPairId)}
                          >
                            <DescriptionSvg />
                          </ButtonIcon>
                          {has(wordPairId, entitiesTestPlan) ? (
                            <ButtonIcon variant="filled" onClick={handleOnRemoveFromTestPlan(wordPairId)}>
                              <RemoveSvg />
                            </ButtonIcon>
                          ) : (
                            <ButtonIcon variant="filled" onClick={handleOnAddToTestPlan(wordPairId)}>
                              <AddSvg />
                            </ButtonIcon>
                          )}
                        </WordPairCard.Footer>
                        <Description isVisible={equals(descriptionId, wordPairId)}>
                          {getDescriptionWordById(wordPairId)(entitiesDictionary)}
                        </Description>
                      </WordPairCard>
                    </WordPairCardMotion>
                  )}
                </List.Map>
              </Box>
            </Box>
          </ScreenBody>
        </EmptyScreen>
      </ScrollContainer>
    </>
  );
}

// <Box className="flex gap-2 items-center">
//   <Box className="flex flex-col gap-1 shrink-0">
//     <Select
//       disabled={!totalDictionary}
//       value={filterPartOfSpeechValue}
//       onValueChange={handleFilterPartOfSpeechChange}
//     >
//       <SelectTrigger>
//         <SelectValue placeholder="Part of Speech" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectItem
//             value={FILTER_PART_OF_SPEECH_MAP.ALL.value}
//             onClick={handleFilterPartOfSpeechChange}
//           >
//             {FILTER_PART_OF_SPEECH_MAP.ALL.displayValue}
//           </SelectItem>
//           <List.Map array={availablePartOfSpeech}>
//             {(partOfSpeech) => (
//               <SelectItem
//                 key={partOfSpeech}
//                 value={partOfSpeech}
//               >
//                 {partOfSpeech}
//               </SelectItem>
//             )}
//           </List.Map>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   </Box>
// </Box>

export default ListScreen;
