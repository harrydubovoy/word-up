import { Typography } from '../ui/Typography';

import { getYear } from '../utils/dateTime';

function Copyright() {
  return (
    <Typography
      variant="small"
      className="text-center block"
    >
      &copy;&nbsp;2023&nbsp;&mdash;&nbsp;
      {getYear()}
      &nbsp;WordUp by&nbsp;
      <a className="hover:text-slate-400" href="https://github.com/harrydubovoy" target="_blank">@harrydubovyi</a>
    </Typography>
  );
}

export default Copyright;
