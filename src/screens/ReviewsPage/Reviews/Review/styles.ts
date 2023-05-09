import { SxProps } from '@mui/material';

const styles = {
  root: {
    borderRadius: 2,
    p: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', 'row'],
  },

  wrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: ['column', 'row'],
  },

  avatar: {
    width: 80,
    height: 80,
    mb: [1, 0],
  },

  description: {
    ml: [0, 4],
    mb: [1, 0],
  },

  type: {
    ml: [0, 4],

    span: {
      color: 'text.secondary',
    },
  },

  createdAt: {
    ml: [0, 4],
  },
} as Record<string, SxProps>;

export default styles;
