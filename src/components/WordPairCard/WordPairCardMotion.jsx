import { MotionBox } from '../../ui/Box';

const wordPairCardVariants = {
  offscreen: {
    opacity: 0,
    transform: 'translateY(-20%) scale(0.9)',
  },
  onscreen: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
};

export function WordPairCardMotion({ children, scrollRef }) {
  return (
    <MotionBox
      variants={wordPairCardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0, root: scrollRef }}
    >
      {children}
    </MotionBox>
  );
}
