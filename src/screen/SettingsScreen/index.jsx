import React, { useState } from "react";

import { prop } from 'ramda';

import Button from '../../ui/Button';
import Typography from '../../ui/Typography';
import { Menu, MenuHandler, MenuList, MenuItem } from "../../ui/Menu";

import ScreenContainer from "../../screen-components/ScreenContainer";
import ScreenHeader from "../../screen-components/ScreenHeader";

import { useTranslation } from '../../translations';
import {
  COMMON__ENGLISH,
  COMMON__UKRAINIAN,
  SETTINGS_SCREEN__TITLE,
  SETTINGS_SCREEN__SELECT_LANGUAGE_LABEL,
} from '../../translations/resources/constants';

import { storage } from '../../storage';
// import { getTargetValue } from "../../utils/input";

const MAP_LANGCODE_TO_LOCALE_CONSTANT = {
  'ua': COMMON__UKRAINIAN,
  'en': COMMON__ENGLISH,
}

const SettingsScreen = () => {
  const { t, handleChangeLanguage } = useTranslation();
  const [menuValue, setMenuValue] = useState(prop(storage().get('lng'), MAP_LANGCODE_TO_LOCALE_CONSTANT));
  // const [goalInputValue, setGoalInputValue] = useState(() => storage().get('goal') ?? '');

  // const handleOnChange = (event) => {
  //   const value = getTargetValue(event);
  //   setGoalInputValue(value);
  //   storage().set('goal', value);
  // }

  const handleSetMenuValue = (lng) => {
    handleChangeLanguage(lng);
    setMenuValue(prop(lng, MAP_LANGCODE_TO_LOCALE_CONSTANT))
  }

  return (
    <ScreenContainer>
      <ScreenHeader title={t(SETTINGS_SCREEN__TITLE)} />

      <div className="mb-8">
        <div className="mb-2">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {t(SETTINGS_SCREEN__SELECT_LANGUAGE_LABEL)}
          </Typography>
        </div>
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button>{t(menuValue)}</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem onClick={() => handleSetMenuValue('en')}>{t(COMMON__ENGLISH)}</MenuItem>
            <MenuItem onClick={() => handleSetMenuValue('ua')}>{t(COMMON__UKRAINIAN)}</MenuItem>
          </MenuList>
        </Menu>
      </div>

      {/*<div>*/}
      {/*  <Typography variant="h6" color="blue-gray" className="mb-2">*/}
      {/*    Your Goal*/}
      {/*  </Typography>*/}
      {/*  <Input*/}
      {/*    onChange={handleOnChange}*/}
      {/*    value={goalInputValue}*/}
      {/*    placeholder="3000"*/}
      {/*    size="md"*/}
      {/*    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"*/}
      {/*    labelProps={{*/}
      {/*      className: "before:content-none after:content-none",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}

    </ScreenContainer>
  )
}

export default SettingsScreen;
