import React from 'react';
import { map, prop, addIndex, nth, equals } from 'ramda';

import {
  getQuestionWordKeyByReverse,
  getAnswerWordKeyByReverse,
} from './utils';

const ResultAnswersList = ({ userAnswers, data, isTestRevered }) => (
  <ul className="flex flex-col gap-2">
    {addIndex(map)((item, index) => {
      const questionWord = prop(getQuestionWordKeyByReverse(isTestRevered))(item);
      const answerWord = prop(getAnswerWordKeyByReverse(isTestRevered))(item);
      const userAnswerWord = nth(index)(userAnswers);

      return (
        <li key={questionWord}>
          <div className="flex justify-center">
              <span>
                {questionWord}
              </span>
            {!equals(answerWord, userAnswerWord) && (
              <>
                &nbsp;&ndash;&nbsp;
                <span className="text-red-500">
                    {userAnswerWord}
                  </span>
              </>
            )}
            &nbsp;&ndash;&nbsp;
            <span className="text-green-500">
                {answerWord}
              </span>
          </div>
        </li>
      )
    }, data)}
  </ul>
);

export default ResultAnswersList;
