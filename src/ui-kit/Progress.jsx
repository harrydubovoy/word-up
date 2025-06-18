import { LayoutBox } from './LayoutBox';
import { styled } from './theme';

const ProgressBar = styled(LayoutBox)({
  height: '8px',
  backgroundColor: 'var(--foreground0)',
});

const ProgressBarFilled = styled(LayoutBox)({
  height: '100%',
  backgroundColor: 'var(--background3)',
  position: 'relative',
  width: '0',
  transition: 'width 0.3s',
});

export function Progress({ value, ...props }) {
  return (
    <ProgressBar {...props}>
      <ProgressBarFilled style={{ width: `${value}%` }} />
    </ProgressBar>
  );
}
Progress.displayName = 'Progress';
