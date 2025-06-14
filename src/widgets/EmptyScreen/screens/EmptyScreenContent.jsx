import MuiBox from '@mui/material/Box';

function EmptyScreenContent({ children }) {
  return (
    <MuiBox sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
    }}
    >
      {children}
    </MuiBox>
  );
}

export { EmptyScreenContent };
