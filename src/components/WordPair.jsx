import Typography from '../ui/Typography';
import FlagIcon, { FLAG_ICON_TYPE } from './FlagIcon';

const WordPair = ({ foreign, native }) => (
  <div className="bg-tropical-blue rounded-ss-xl rounded-ee-xl w-full transform flex flex-col gap-2 -translate-x-3.5 -translate-y-3.5 p-3">
    <Typography
      variant="small"
      color="blue-gray"
      className="font-normal flex items-center gap-3"
    >
      <FlagIcon type={FLAG_ICON_TYPE.ENG} /> {foreign}
    </Typography>
    <Typography
      variant="small"
      color="blue-gray"
      className="font-normal flex gap-3 items-center"
    >
      <FlagIcon type={FLAG_ICON_TYPE.UA} /> {native}
    </Typography>
  </div>
)

export default WordPair;
