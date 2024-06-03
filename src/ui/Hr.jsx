import classNames from 'classnames';

export function Hr({ className }) {
  return <hr className={classNames('border-blue-gray-50', className)} />;
}
