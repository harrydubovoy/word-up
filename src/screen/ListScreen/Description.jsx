import { AnimatePresence } from 'framer-motion';

import { Box, MotionBox } from '../../ui/Box';
import { Hr } from '../../ui/Hr';
import { Typography } from '../../ui/Typography';

const LINKED_DELAY = 0.2;

const wordPairDescriptionBox = {
  visible: {
    height: 'auto',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
  hidden: {
    height: 0,
    transition: {
      when: 'afterChildren',
      delay: LINKED_DELAY,
    },
  },
};

const wordPairDescriptionText = {
  visible: {
    opacity: 1,
    transition: {
      delay: LINKED_DELAY,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export function Description({ children, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
      <MotionBox
        variants={wordPairDescriptionBox}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <MotionBox
          variants={wordPairDescriptionText}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Box className="pt-4">
            <Hr className="mb-2" />
            <Typography variant="small">
              {children}
            </Typography>
          </Box>
        </MotionBox>
      </MotionBox>
      )}
    </AnimatePresence>
  );
}
