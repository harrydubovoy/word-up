import { Box } from '../../ui-kit/Box';
import { EmptyScreenFactory } from './EmptyScreenFactory';

export function EmptyScreen({ children, type }) {
  if (type) {
    return (
      <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <EmptyScreenFactory type={type} />
      </Box>
    );
  }

  return children;
}