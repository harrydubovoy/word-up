import classNames from 'classnames';

function ScrollContainer({ children, className }) {
  return (
    <div className={classNames('overflow-y-auto h-full', className)}>
      {children}
    </div>
  );
}

export default ScrollContainer;
