import { LayoutBox } from '../../ui-kit/LayoutBox';
import { Box } from '../../ui-kit/Box';
import { Typography } from '../../ui-kit/Typography';
import { Badge } from '../../ui-kit/Badge';
import { If } from '../../shared/utils/If';

const selectedTuple = [' ', <Badge key="added" variant="yellow">Added</Badge>];

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
    <Box captionTop={isSelected ? selectedTuple : null}>
      <LayoutBox>
        <If condition={partOfSpeech}>
          <LayoutBox sx={{ marginBottom: '8px' }}>
            <Badge variant="background1">{partOfSpeech}</Badge>
          </LayoutBox>
        </If>
        <LayoutBox sx={{ display: 'flex', gap: '2px' }}>
          <Typography variant="h3">{foreign}</Typography>
          <If condition={transcription}>
            <Typography variant="p">
              [
              {transcription}
              ]
            </Typography>
          </If>
        </LayoutBox>
        <Typography variant="h3">{native}</Typography>

        <LayoutBox sx={{ display: 'flex', justifyContent: 'end', gap: '4px', marginTop: '12px' }}>
          {renderActions()}
        </LayoutBox>
        <If condition={description}>
          <Box type="round">
            <Typography variant="p">{description}</Typography>
          </Box>
        </If>
      </LayoutBox>
    </Box>
  );
}
