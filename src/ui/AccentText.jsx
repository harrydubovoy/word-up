import classNames from 'classnames';

const AccentText = ({ children, className, ...restProps }) => (
  <span {...restProps} className={classNames('text-pantone', className)}>
    {children}
  </span>
)

export default AccentText;
