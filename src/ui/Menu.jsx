import { forwardRef } from 'react';
import {
  Menu as MenuCore,
  MenuHandler as MenuHandlerCore,
  MenuList as MenuListCore,
  MenuItem as MenuItemCore,
} from '@material-tailwind/react';

export const Menu = forwardRef(({ children, ...restProps }, ref) => (
  <MenuCore ref={ref} {...restProps}>{children}</MenuCore>
));
Menu.displayName = 'Menu';

export const MenuHandler = forwardRef(({ children, ...restProps }, ref) => (
  <MenuHandlerCore ref={ref} {...restProps}>{children}</MenuHandlerCore>
));
MenuHandler.displayName = 'MenuHandler';

export const MenuList = forwardRef(({ children, ...restProps }, ref) => (
  <MenuListCore ref={ref} {...restProps}>{children}</MenuListCore>
));
MenuList.displayName = 'MenuList';

export const MenuItem = forwardRef(({ children, ...restProps }, ref) => (
  <MenuItemCore ref={ref} {...restProps}>{children}</MenuItemCore>
));
MenuItem.displayName = 'MenuItem';
