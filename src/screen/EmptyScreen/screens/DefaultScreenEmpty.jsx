import LightbulbSvg from '@material-design-icons/svg/outlined/lightbulb.svg';

import { Box } from '../../../ui/Box';
import { Typography } from '../../../ui/Typography';

export function DefaultScreenEmpty() {
  return (
    <>
      <Box className="flex justify-center">
        <LightbulbSvg width="84" height="84" />
      </Box>
      <Typography variant="h4" className="text-center">
        No words yet
      </Typography>
    </>
  );
}