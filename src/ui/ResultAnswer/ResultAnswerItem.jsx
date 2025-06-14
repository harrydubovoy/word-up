import { Box } from '../../ui-kit/Box';
import { Typography } from '../../ui-kit/Typography';
import { Badge } from '../../ui-kit/Badge';
import { Branch } from '../../shared/utils/Branch';

export function ResultAnswerItem({ questionWord, userAnswerWord, isRightAnswer, rightAnswer }) {
  return (
    <Box
      captionTop={[
        ' ',
        <Badge key="answer-badge" variant={isRightAnswer ? 'green' : 'red'}>
          <Branch
            condition={isRightAnswer}
            slotIf="Right"
            slotElse="Wrong"
          />
        </Badge>,
      ]}
    >
      <Typography variant="h3">{questionWord}</Typography>
      <Typography variant="h3">
        <Branch
          condition={isRightAnswer}
          slotIf={userAnswerWord}
          slotElse={<span style={{ textDecoration: 'line-through' }}>{userAnswerWord}</span>}
        />
        {' '}
        {!isRightAnswer && rightAnswer}
      </Typography>
    </Box>
  );
}
