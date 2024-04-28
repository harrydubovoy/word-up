import React from 'react';
import classNames from 'classnames';

import { Card, CardBody } from '../../ui/Card';
import { Typography } from '../../ui/Typography';

import { getQuestionBackgroundClassName } from './utils';

import { backgroundColorsList } from './constants';

const QuestionWord = ({ children, className, cursor }) => {
  const backgroundColor = getQuestionBackgroundClassName(backgroundColorsList, cursor);

  return (
    <Card className={classNames(className, backgroundColor)}>
      <CardBody>
        <Typography className="text-xl font-bold text-neutral-900 text-center">
          {children}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default QuestionWord;
