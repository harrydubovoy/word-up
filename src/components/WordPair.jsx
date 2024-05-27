import classNames from 'classnames';

import If from '../util-components/If';

import { Typography } from '../ui/Typography';
import FlagIcon from './FlagIcon';

import { FLAG_ICON_TYPE } from '../constants/icons';

function WordPair({ foreign, native, transcription, isSelected }) {
  return (
    <div
      className={classNames('rounded-ss-xl rounded-ee-xl w-full transform flex flex-col gap-2 -translate-x-3.5 -translate-y-3.5 p-3', {
        'bg-tropical-blue': !isSelected,
        'bg-caper': isSelected,
      })}
    >
      <Typography
        variant="paragraph"
        color="blue-gray"
        className="font-normal flex items-center gap-3"
      >
        <FlagIcon type={FLAG_ICON_TYPE.ENG} />
        {foreign}
        <If condition={transcription}>
          <Typography as="span" variant="small">
            /
            {transcription}
            /
          </Typography>
        </If>
      </Typography>
      <Typography
        variant="paragraph"
        color="blue-gray"
        className="font-normal flex gap-3 items-center"
      >
        <FlagIcon type={FLAG_ICON_TYPE.UA} />
        {' '}
        {native}
      </Typography>
    </div>
  );
}

export default WordPair;
