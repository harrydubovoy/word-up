import { useNavigate } from 'react-router-dom';

import { Typography } from '../../../ui/Typography';
import { Button } from '../../../ui/Button';
import EmptySvg from '../../../icons/EmptySvg';

import { useAppSelector } from '../../../store/hooks';
import { selectTotalDictionary } from '../../../store/reducer/dictionary.slice';

const getDescriptionByDictionaryTotal = (totalDictionary) => (
  totalDictionary ? 'Go to dictionary for adding one' : 'Go to add page for adding one'
);

const getButtonTextByDictionaryTotal = (totalDictionary) => (
  totalDictionary ? 'Go to dictionary' : 'Add new word'
);

const getRouteByDictionaryTotal = (totalDictionary) => (
  totalDictionary ? '/list' : '/add'
);

function TestScreenEmpty() {
  const navigate = useNavigate();
  const totalDictionary = useAppSelector(selectTotalDictionary);

  return (
    <>
      <div className="flex justify-center">
        <EmptySvg />
      </div>
      <Typography variant="h4" className="text-center">
        No words for testing
      </Typography>
      <Typography>
        {getDescriptionByDictionaryTotal(totalDictionary)}
      </Typography>
      <div className="mt-4">
        <Button onClick={() => navigate(getRouteByDictionaryTotal(totalDictionary))}>
          {getButtonTextByDictionaryTotal(totalDictionary)}
        </Button>
      </div>
    </>
  );
}

export default TestScreenEmpty;
