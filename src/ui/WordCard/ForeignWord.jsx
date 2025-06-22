import Typography from '@mui/material/Typography';

export function ForeignWord({ children }) {
  return (
    <Typography variant="subtitle1" component="div">
      {children}
    </Typography>
  );
}
