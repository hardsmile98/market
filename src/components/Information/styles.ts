import { SxProps } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    flexDirection: ['column', 'row'],
  },

  skeletonRoot: {
    display: 'flex',
    flexDirection: ['column', 'row'],
  },

  skeletonSlider: {
    borderRadius: 6,
  },

  slider: {
    width: ['100%', '50%', '60%'],
    mr: [0, 4],
    mb: [2, 0],
  },

  info: {
    width: ['100%', '50%', '40%'],
  },
} as Record<string, SxProps>;

export default styles;
