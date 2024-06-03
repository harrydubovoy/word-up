import { List as ListCore, ListItem as ListItemCore } from '@material-tailwind/react';
import classNames from 'classnames';

export function List({ children, className, ...restProps }) {
  return <ListCore {...restProps} className={classNames(className)}>{children}</ListCore>;
}

export function ListItem({ children, className, ...restProps }) {
  return <ListItemCore {...restProps} className={classNames('rounded-full', className)}>{children}</ListItemCore>;
}
