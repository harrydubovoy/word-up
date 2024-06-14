import { useNavigate } from 'react-router-dom';

import { Typography } from '../../../ui/Typography';
import { Button } from '../../../ui/Button';
import { Box } from '../../../ui/Box';
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

  const handleNavigate = () => {
    navigate(getRouteByDictionaryTotal(totalDictionary));
  };

  return (
    <>
      <Box className="flex justify-center">
        <EmptySvg />
      </Box>
      <Typography variant="h4" className="text-center">
        No words for testing
      </Typography>
      <Typography>
        {getDescriptionByDictionaryTotal(totalDictionary)}
      </Typography>
      <Box className="mt-4">
        <Button onClick={handleNavigate}>
          {getButtonTextByDictionaryTotal(totalDictionary)}
        </Button>
      </Box>
    </>
  );
}

export default TestScreenEmpty;
