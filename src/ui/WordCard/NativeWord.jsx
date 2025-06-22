import Typography from '@mui/material/Typography';

export function NativeWord({ children }) {
  return (
    <Typography sx={{ color: 'text.secondary', fontSize: 16 }}>
      {children}
    </Typography>
  );
}
