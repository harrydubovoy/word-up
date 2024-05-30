import classNames from 'classnames';

import { Card, CardBody } from '../../ui/Card';
import { Typography } from '../../ui/Typography';
import { PartOfSpeechCheep } from '../../components/PartOfSpeechCheep';
import If from '../../util-components/If';

function QuestionWord({ questionWord, partOfSpeech, transcription, className }) {
  return (
    <Card className={classNames(className, 'bg-jet-stream')}>
      <CardBody className="p-7">
        <If condition={partOfSpeech}>
          <PartOfSpeechCheep className="absolute right-2 top-2">{partOfSpeech}</PartOfSpeechCheep>
        </If>
        <Typography className="text-xl font-bold text-lunar-green text-center">
          {questionWord}
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
  );
}

export default QuestionWord;
