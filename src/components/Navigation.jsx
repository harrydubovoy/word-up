import React from "react";
import { Link, useLocation } from "react-router-dom";

import Container from '../ui/Container';
import { List, ListItem } from '../ui/List';
import Card from '../ui/Card';

import HomeSvg from '../icons/HomeSvg';
import ListSvg from '../icons/ListSvg';
import AddSvg from '../icons/AddSvg';
import TrashSvg from '../icons/TrashSvg';
import SettingsSvg from '../icons/SettingsSvg';
// import MonitoringSvg from '../icons/MonitoringSvg';

const Navigation = () => {
  const location = useLocation();

  return (
    <Card shadow={false}>
      <Container>
        <List className="flex flex-row justify-between px-0 py-2">
          <Link to="">
            <ListItem selected={location.pathname === '/'}>
              <HomeSvg />
            </ListItem>
          </Link>
          <Link to="list">
            <ListItem selected={location.pathname === '/list'}>
              <ListSvg />
            </ListItem>
          </Link>
          <Link to="add">
            <ListItem selected={location.pathname === '/add'}>
              <AddSvg />
            </ListItem>
          </Link>
          <Link to="trash">
            <ListItem selected={location.pathname === '/trash'}>
              <TrashSvg />
            </ListItem>
          </Link>
          <Link to="settings">
            <ListItem selected={location.pathname === '/settings'}>
              <SettingsSvg />
            </ListItem>
          </Link>
          {/*<Link to="monitoring">*/}
          {/*  <ListItem selected={location.pathname === '/monitoring'}>*/}
          {/*    <MonitoringSvg />*/}
          {/*  </ListItem>*/}
          {/*</Link>*/}
        </List>
      </Container>
    </Card>
  );
}

export default Navigation;
