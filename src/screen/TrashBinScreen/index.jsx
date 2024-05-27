import { map, reverse, prop } from 'ramda';

import IconButton from '../../ui/IconButton';

import TrashForeverSvg from '../../icons/TrashForeverSvg';
import RefreshSvg from '../../icons/RefreshSvg';

import ScrollContainer from '../../screen-components/ScrollContainer';
import ScreenBody from '../../screen-components/ScreenBody';
import WordPairCard from '../../components/WordPairCard';
import WordPair from '../../components/WordPair';
import EmptyScreen, { EMPTY_SCREEN_TYPE } from '../EmptyScreen';

import Header from './Header';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectEntitiesTrashBin,
  selectIdsTrashBin,
  selectTotalTrashBin,
  removeOneTrashBin,
} from '../../store/reducer/trash-bin.slice';
import { addOneDictionary } from '../../store/reducer/dictionary.slice';

import { getNativeWordById, getForeignWordById } from '../../utils/word';

const TrashBinScreen = () => {
  const dispatch = useAppDispatch();
  const entitiesTrashBin = useAppSelector(selectEntitiesTrashBin);
  const idsTrashBin = useAppSelector(selectIdsTrashBin);
  const totalTrashBin = useAppSelector(selectTotalTrashBin);

  const handleOnRemove = (wordPairId) => () => {
    dispatch(removeOneTrashBin(wordPairId));
  }

  const handleRestore = (wordPairId) => () => {
    dispatch(addOneDictionary(prop(wordPairId)(entitiesTrashBin)));
    dispatch(removeOneTrashBin(wordPairId));
  }

  return (
    <>
      <Header />
      <ScrollContainer>
        <EmptyScreen type={!totalTrashBin && EMPTY_SCREEN_TYPE.DEFAULT}>
          <ScreenBody className="bg-catskill-white">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-4">
                {map((wordPairId) => (
                  <WordPairCard key={wordPairId}>
                    <WordPairCard.Body>
                      <WordPair
                        native={getNativeWordById(wordPairId)(entitiesTrashBin)}
                        foreign={getForeignWordById(wordPairId)(entitiesTrashBin)}
                      />
                    </WordPairCard.Body>
                    <WordPairCard.Footer>
                      <IconButton variant="outlined" size="sm" onClick={handleRestore(wordPairId)}>
                        <RefreshSvg />
                      </IconButton>
                      <IconButton size="sm" onClick={handleOnRemove(wordPairId)}>
                        <TrashForeverSvg />
                      </IconButton>
                    </WordPairCard.Footer>
                  </WordPairCard>
                ), reverse(idsTrashBin))}
              </div>
            </div>
          </ScreenBody>
        </EmptyScreen>
      </ScrollContainer>
    </>
  )
}

export default TrashBinScreen;
