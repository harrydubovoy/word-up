import { Typography } from '../../ui-kit/Typography';
import { Box } from '../../ui-kit/Box';
import { Link } from '../../ui-kit/Link';

import { getYear } from '../../shared/utils/dateTime';

export function Copyright() {
  return (
    <Box sx={{ padding: '12px 0' }}>
      <Typography
        variant="subtitle2"
        fontWeight="400"
        textAlign="center"
      >
        &copy;&nbsp;2023&nbsp;&mdash;&nbsp;
        {getYear()}
				&nbsp;WordUp by&nbsp;
        <Link href="https://github.com/harrydubovoy" target="_blank">@harrydubovyi</Link>
      </Typography>
    </Box>
  );
}
