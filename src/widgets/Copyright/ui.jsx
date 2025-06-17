import { Typography } from '../../ui-kit/Typography';
import { LayoutBox } from '../../ui-kit/LayoutBox';
import { Link } from '../../ui-kit/Link';

import { getYear } from '../../shared/utils/dateTime';

export function Copyright() {
  return (
    <LayoutBox sx={{ padding: '12px 0 0', textAlign: 'center' }}>
      <Typography variant="p">
        &copy;&nbsp;2023&nbsp;&mdash;&nbsp;
        {getYear()}
				&nbsp;WordUp by&nbsp;
        <Link href="https://github.com/harrydubovoy" target="_blank">@harrydubovyi</Link>
      </Typography>
    </LayoutBox>
  );
}
