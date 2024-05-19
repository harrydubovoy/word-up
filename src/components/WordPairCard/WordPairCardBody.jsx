import { CardBody } from '../../ui/Card';

import WordPair from '../WordPair';

const WordPairCardBody = ({ native, foreign }) => (
  <CardBody className="p-0">
    <WordPair
      native={native}
      foreign={foreign}
    />
  </CardBody>
)

export default WordPairCardBody;
