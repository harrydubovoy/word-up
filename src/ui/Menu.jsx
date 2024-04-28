import {
  Menu as MenuCore,
  MenuHandler as MenuHandlerCore,
  MenuList as MenuListCore,
  MenuItem as MenuItemCore,
} from '@material-tailwind/react';

const Menu = ({ children, ...restProps }) => <MenuCore {...restProps}>{children}</MenuCore>;
const MenuHandler = ({ children, ...restProps }) => <MenuHandlerCore {...restProps}>{children}</MenuHandlerCore>;
const MenuList = ({ children, ...restProps }) => <MenuListCore {...restProps}>{children}</MenuListCore>;
const MenuItem = ({ children, ...restProps }) => <MenuItemCore {...restProps}>{children}</MenuItemCore>;

export {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
}
