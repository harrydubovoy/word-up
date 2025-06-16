import { LayoutBox } from '../../../ui-kit/LayoutBox';

function EmptyScreenContent({ children }) {
  return (
    <LayoutBox sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
    }}
    >
      {children}
    </LayoutBox>
  );
}

export { EmptyScreenContent };
