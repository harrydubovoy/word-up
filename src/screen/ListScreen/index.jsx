import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { map, prop, reverse, has, compose } from 'ramda';

import { IconButton } from '../../ui/IconButton';
import { Drawer } from '../../ui/Drawer';
import { Input } from '../../ui/Input';
import { Typography } from '../../ui/Typography';
import { Menu, MenuItem, MenuHandler, MenuList } from '../../ui/Menu';
import { Button } from '../../ui/Button';
import { Navbar } from '../../ui/Navbar';

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
import DescriptionSvg from '../../icons/DescriptionSvg';

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
import { openExternalDictionaryPageByWord } from '../../utils/navigation';
import { filterByType, filterBySearchString } from '../../utils/filter';
import { getEmptyScreenType } from './utils';

import { FILTER_MAP } from '../../constants/filter';

function ListScreen() {
  const navigate = useNavigate();

  const drawerRef = useRef(null);
  const [drawerDescriptionId, setDrawerDescriptionId] = useState(0);

  const dispatch = useAppDispatch();
  const entitiesDictionary = useAppSelector(selectEntitiesDictionary);
  const entitiesTestPlan = useAppSelector(selectEntitiesTestPlan);
  const idsDictionary = useAppSelector(selectIdsDictionary);
  const totalDictionary = useAppSelector(selectTotalDictionary);
  const idsTestPlan = useAppSelector(selectIdsTestPlan);

  const { searchString, handleOnSearchChange } = useSearchQuery();
  const { filterValue, filterDisplayValue, handleFilterTypeChange } = useFilterType();

  const handleOpenDescriptionDrawer = (id) => () => setDrawerDescriptionId(id);
  const handleCloseDescriptionDrawer = () => setDrawerDescriptionId(0);

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

  const filteredIdsDictionary = compose(
    reverse,
    filterBySearchString(searchString, { entities: entitiesDictionary }),
    filterByType(filterValue, { includedIds: idsTestPlan }),
  )(idsDictionary);

  return (
    <>
      <Header />
      <Drawer
        className="absolute rounded-t-3xl p-6"
        placement="bottom"
        overlayRef={drawerRef}
        open={Boolean(drawerDescriptionId)}
        onClose={handleCloseDescriptionDrawer}
      >
        <Typography variant="paragraph" color="blue-gray" className="text-left">
          {getDescriptionWordById(drawerDescriptionId)(entitiesDictionary)}
        </Typography>
      </Drawer>
      <Navbar className="rounded-t-none p-4">
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
                        onClick={handleOpenDescriptionDrawer(wordPairId)}
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
