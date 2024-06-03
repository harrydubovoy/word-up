import { forwardRef } from 'react';
import { Input as InputCore } from '@material-tailwind/react';

export const Input = forwardRef((props, ref) => <InputCore className="bg-white" ref={ref} {...props} />);

Input.displayName = 'Input';
