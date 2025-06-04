import MuiListItem from '@mui/material/ListItem';
import MuiListItemText from '@mui/material/ListItemText';

import { Box } from '../../ui-kit/Box';
import { If } from '../../shared/utils/If';
import { Branch } from '../../shared/utils/Branch';

export function ResultAnswerItem({ questionWord, userAnswerWord, isRightAnswer, rightAnswer }) {
  return (
    <MuiListItem sx={{ position: 'relative', backgroundColor: isRightAnswer ? '#c5e1a5' : '#fecaca' }}>
      <Box
        component="span"
        sx={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '20px',
        }}
      >
        <Branch
          condition={isRightAnswer}
          slotIf={<>👍</>}
          slotElse={<>🙂</>}
        />
      </Box>
      <MuiListItemText
        primary={(
          <>
            <Box component="span" sx={{ textDecoration: isRightAnswer ? '' : 'line-through' }}>
              {userAnswerWord}
            </Box>
            <If condition={!isRightAnswer}>
              &nbsp;
              <Box component="span">
                {rightAnswer}
              </Box>
            </If>
          </>
        )}
        secondary={questionWord}
      />
    </MuiListItem>
  );
}
