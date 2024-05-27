// eslint-disable jsx-props-no-spreading
import { Textarea as TextareaCore } from '@material-tailwind/react';

export function Textarea(props) {
  return <TextareaCore className="bg-white" {...props} />;
}
