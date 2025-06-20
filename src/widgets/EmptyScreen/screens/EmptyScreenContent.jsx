import { Box } from '../../../ui-kit/Box';

function EmptyScreenContent({ children }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
    }}
    >
      {children}
    </Box>
  );
}

export { EmptyScreenContent };
