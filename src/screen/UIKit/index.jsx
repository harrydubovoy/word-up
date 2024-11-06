import SettingsSvg from '@material-design-icons/svg/outlined/archive.svg';
import { Box } from '../../ui/Box';
import { Typography } from '../../ui/Typography';
import { ScreenContainer } from '../../screen-components/ScreenContainer';

import { Button, ButtonIcon } from '../../ui/Button';
import { TextField } from '../../ui/TextField';

function SubSection({ children, variant }) {
  return (
    <Box className="mt-2">
      <Typography variant="h5">{variant}</Typography>
      <Box className="flex flex-wrap gap-2 items-center mt-2">
        {children}
      </Box>
    </Box>
  );
}

function Section({ children, title }) {
  return (
    <Box className="flex flex-col gap-2">
      <Typography variant="h3" className="uppercase">{title}</Typography>
      {children}
    </Box>
  );
}

export function UIKit() {
  return (
    <ScreenContainer>
      <Box className="h-full p-6 grid gap-2">
        <Section title="Buttons">
          <SubSection variant="Button">
            <Button variant="filled">Filed</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button variant="elevated">Elevated</Button>
            <Button variant="tonal">Tonal</Button>
            <Button variant="filled" disabled>Disabled</Button>
          </SubSection>
          <SubSection variant="ButtonIcon">
            <ButtonIcon variant="filled">
              <SettingsSvg />
            </ButtonIcon>
            <ButtonIcon variant="outlined">
              <SettingsSvg />
            </ButtonIcon>
            <ButtonIcon variant="text">
              <SettingsSvg />
            </ButtonIcon>
            <ButtonIcon variant="elevated">
              <SettingsSvg />
            </ButtonIcon>
            <ButtonIcon variant="tonal">
              <SettingsSvg />
            </ButtonIcon>
            <ButtonIcon variant="filled" disabled>
              <SettingsSvg />
            </ButtonIcon>
          </SubSection>
        </Section>
        <Section title="Textfield">
          <SubSection variant="Filled">
            <TextField variant="filled" type="text" label="Filled input" placeholder="Some text" id="filled-textfield-text-input" />
            <TextField variant="filled" type="textarea" label="Filled textarea" placeholder="Some text" id="filled-textfield-textarea" />
          </SubSection>
          <SubSection variant="Outlined">
            <TextField variant="outlined" type="text" label="Outlined input" placeholder="Some text" id="Outlined-textfield-text-input" />
            <TextField variant="outlined" type="textarea" label="Outlined textarea" placeholder="Some text" id="Outlined-textfield-textarea" />
          </SubSection>
        </Section>
      </Box>
    </ScreenContainer>
  );
}
