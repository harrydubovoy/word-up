import classNames from 'classnames';

import { Chip } from '../ui/Chip';

export function PartOfSpeechCheep({ children, className }) {
  return (
    <Chip
      size="sm"
      variant="ghost"
      className={classNames('rounded-full lowercase', className)}
      value={children}
    />
  );
}
