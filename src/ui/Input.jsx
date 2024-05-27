import { forwardRef } from 'react';
import { Input as InputCore } from '@material-tailwind/react';

const Input = forwardRef((props, ref) => <InputCore className="bg-white" ref={ref} {...props} />);

Input.displayName = 'Input';

export default Input;
