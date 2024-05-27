import classNames from 'classnames';

function Container({ children, className }) {
  return (
    <div className={classNames('px-4', className)}>
      {children}
    </div>
  );
}

export default Container;
