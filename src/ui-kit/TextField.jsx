import { forwardRef } from 'react';
import MuiTextField from '@mui/material/TextField';
import MuiInputAdornment from '@mui/material/InputAdornment';

const TextField = forwardRef(({ endAdornment, ...props }, ref) => (
  <MuiTextField
    {...props}
    inputRef={ref}
    slotProps={{
      input: {
        endAdornment: endAdornment && (
          <MuiInputAdornment position="end">
            {endAdornment}
          </MuiInputAdornment>
        ),
      },
    }}
  />
));
TextField.displayName = 'TextField';

export { TextField };
