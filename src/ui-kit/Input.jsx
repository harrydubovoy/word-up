import { Badge } from './Badge';
import { Box } from './Box';

export function Input({ size, label, ...props }) {
  return (
    <Box
      className="input"
      htmlTag="lable"
      box-="round"
      captionTop={[<Badge key="label" variant="background0">{label}</Badge>]}
    >
      <input size-={size} {...props} />
    </Box>
  );
}
