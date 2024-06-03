import classNames from 'classnames';

import { Card, CardBody } from '../../ui/Card';
import { Typography } from '../../ui/Typography';
import { PartOfSpeechCheep } from '../../components/PartOfSpeechCheep';
import { FlipCard } from '../../components/FlipCard';
import If from '../../util-components/If';

import { isTestReversed } from './utils';

function QuestionWord({
  questionWordForeign,
  questionWordNative,
  partOfSpeech,
  transcription,
  wordKeyType,
}) {
  return (
    <FlipCard
      className="h-32"
      isToggled={isTestReversed(wordKeyType)}
      renderFront={({ frontClassName }) => (
        <Card className={classNames(frontClassName, 'bg-jet-stream h-full flex justify-center items-center')}>
          <CardBody>
            <If condition={partOfSpeech}>
              <PartOfSpeechCheep className="absolute right-2 top-2">{partOfSpeech}</PartOfSpeechCheep>
            </If>
            <Typography className="text-xl font-bold text-lunar-green text-center">
              {questionWordForeign}
            </Typography>
            <If condition={transcription}>
              <span className="flex justify-center mt-2">
                <Typography as="span" variant="small">
                  /
                  {transcription}
                  /
                </Typography>
              </span>
            </If>
          </CardBody>
        </Card>
      )}
      renderBack={({ backClassName }) => (
        <Card className={classNames(backClassName, 'bg-jet-stream h-full flex justify-center items-center')}>
          <CardBody>
            <Typography className="text-xl font-bold text-lunar-green text-center">
              {questionWordNative}
            </Typography>
          </CardBody>
        </Card>
      )}
    />
  );
}

export default QuestionWord;
