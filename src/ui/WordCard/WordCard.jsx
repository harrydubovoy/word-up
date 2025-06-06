import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Box } from '../../ui-kit/Box';

import { PartOfSpeechChip } from '../PartOfSpeechChip';
import { Transcription } from './Transcription';

import { styled, theme } from '../../ui-kit/theme';

const Card = styled(MuiCard)`
  position: relative;
  border-radius: 12px;

  ${(props) => props.isSelected && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 6px;
      height: 100%;
      background-color: ${theme.palette.primary.main};
    }
  `}
`;

const CardFooter = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  gap: '4px',
  padding: '0 16px 16px',
});

export function WordCard({
  isSelected,
  native,
  foreign,
  transcription,
  partOfSpeech,
  renderActions,
}) {
  return (
    <Card isSelected={isSelected} sx={{ width: '100%', display: 'grid', gridTemplateRows: '1fr auto' }}>
      <PartOfSpeechChip label={partOfSpeech} />
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>
          {native}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {foreign}
        </Typography>
        <Transcription>
          {transcription}
        </Transcription>
      </CardContent>
      <CardFooter>
        {renderActions()}
      </CardFooter>
    </Card>
  );
}
