import MuiBox from '@mui/material/Box';

import { List } from '../../shared/utils/List';

import { ResultAnswerItem } from './ResultAnswerItem';

export function ResultAnswersList({ answersList }) {
  return (
    <MuiBox>
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
    </MuiBox>
  );
}
