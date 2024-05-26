import classNames from 'classnames';

const ScrollContainer = ({ children, className }) => (
  <div className={classNames('overflow-y-auto h-full flex flex-col' , className)}>
    {children}
  </div>
)

export default ScrollContainer;
