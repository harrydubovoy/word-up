import { List as ListCore, ListItem as ListItemCore } from '@material-tailwind/react';

const List = ({ children, ...restProps }) => <ListCore {...restProps}>{children}</ListCore>;

const ListItem = ({ children, ...restProps }) => <ListItemCore {...restProps}>{children}</ListItemCore>;

export {
  List,
  ListItem,
}
