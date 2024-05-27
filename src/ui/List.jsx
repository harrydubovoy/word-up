import { List as ListCore, ListItem as ListItemCore } from '@material-tailwind/react';

function List({ children, ...restProps }) {
  return <ListCore {...restProps}>{children}</ListCore>;
}

function ListItem({ children, ...restProps }) {
  return <ListItemCore {...restProps}>{children}</ListItemCore>;
}

export {
  List,
  ListItem,
};
