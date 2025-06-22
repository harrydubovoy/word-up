import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Box } from '../../ui-kit/Box';

import { PartOfSpeechChip } from '../PartOfSpeechChip';
import { ForeignWord } from './ForeignWord';
import { NativeWord } from './NativeWord';
import { Description } from './Description';
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
  description,
  renderActions,
}) {
  return (
    <Card isSelected={isSelected} sx={{ width: '100%', display: 'grid', gridTemplateRows: '1fr auto' }}>
      <PartOfSpeechChip label={partOfSpeech} />
      <CardContent>
        <NativeWord>
          {native}
        </NativeWord>
        <ForeignWord>
          {foreign}
        </ForeignWord>
        <Transcription>
          {transcription}
        </Transcription>
        <Description>
          {description}
        </Description>
      </CardContent>
      <CardFooter>
        {renderActions()}
      </CardFooter>
    </Card>
  );
}
