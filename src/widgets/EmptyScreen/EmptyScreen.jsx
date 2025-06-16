import { LayoutBox } from '../../ui-kit/LayoutBox';
import { EmptyScreenFactory } from './EmptyScreenFactory';

export function EmptyScreen({ children, type }) {
  if (type) {
    return (
      <LayoutBox sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <EmptyScreenFactory type={type} />
      </LayoutBox>
    );
  }

  return children;
}
