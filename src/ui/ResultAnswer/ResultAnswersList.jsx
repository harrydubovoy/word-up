import MuiList from '@mui/material/List';

import { List } from '../../shared/utils/List';

import { ResultAnswerItem } from './ResultAnswerItem';

export function ResultAnswersList({ answersList }) {
  return (
    <MuiList sx={{ display: 'grid', gap: '8px' }}>
      <List.Map array={answersList}>
        {({
          wordPairId,
          isRightAnswer,
          questionWord,
          rightAnswer,
          userAnswerWord,
        }) => (
          <ResultAnswerItem
            key={wordPairId}
            questionWord={questionWord}
            rightAnswer={rightAnswer}
            userAnswerWord={userAnswerWord}
            isRightAnswer={isRightAnswer}
          />
        )}
      </List.Map>
    </MuiList>
  );
}
