import { Typography } from '../ui/Typography';

import { getYear } from '../utils/dateTime';

const Copyright = () => (
  <Typography
    color="blue-gray"
    className="!text-sm !font-normal text-gray-500 text-center"
  >
    &copy; 2023 - {getYear()} WordUp by
    <Typography
      as="a"
      href="https://github.com/harrydubovoy"
      target="_blank"
      color="white"
      className="font-medium !text-sm inline-block !text-gray-500 transition-colors hover:!text-gray-900"
    >
      &nbsp;@harrydubovyi
    </Typography>
  </Typography>
)

export default Copyright;
