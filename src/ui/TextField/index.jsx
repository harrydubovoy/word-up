import { forwardRef } from 'react';
import { TextFieldFilled } from './TextFieldFilled';
import { TextFieldOutlined } from './TextFieldOutlined';

export const TextField = forwardRef(({ variant, ...props }, ref) => {
  if (variant === 'filled') {
    return <TextFieldFilled ref={ref} {...props} />;
  }

  if (variant === 'outlined') {
    return <TextFieldOutlined ref={ref} {...props} />;
  }

  return null;
});
TextField.displayName = 'TextField';
