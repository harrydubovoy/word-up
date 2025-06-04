import { Box } from '../../ui-kit/Box';

export function Content({ children, sx }) {
  return (
    <Box sx={{
      ...sx,
      padding: '16px',
      borderRadius: '24px',
    }}
    >
      {children}
    </Box>
  );
}
