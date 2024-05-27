import classNames from 'classnames';

function Hr({ className }) {
  return <hr className={classNames('border-blue-gray-50', className)} />;
}

export default Hr;
