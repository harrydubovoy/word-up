import { Box } from '../../ui/Box';
import { EmptyScreenFactory } from './EmptyScreenFactory';

function EmptyScreen({ children, type }) {
  if (type) {
    return (
      <Box className="flex flex-col items-center gap-4 justify-center h-full">
        <EmptyScreenFactory type={type} />
      </Box>
    );
  }

  return children;
}

export default EmptyScreen;
