import { gradient } from '#/src/theme';
import { SxProps } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  logo: {
    width: ['100%', 'auto'],
    textAlign: ['center', 'left'],
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', 'row'],
    width: ['100%', '100%', 'auto'],
  },

  login: {
    color: 'background.paper',
    background: gradient,
    px: 3,
    borderRadius: 7,
    py: 1.5,
    display: 'flex',
    alignItems: 'center',

    svg: {
      mr: 0.5,
    },
  },

  search: {
    width: ['100%', 320, 220, 320],
    order: [1, 0],
  },

  menu: {
    order: [0, 1],
    pt: [1, 0],
    pb: [2, 0],
    ml: [0, 6],
    fontSize: ['body2.fontSize', 'body1.fontSize'],

    'ul, li': {
      m: 0,
      p: 0,
      listStyle: 'none',
    },

    ul: {
      color: 'text.secondary',
      display: 'flex',
      alignItems: 'center',

      li: {
        ':not(:last-of-type)': {
          mr: [2.5, 4],
        },

        '> a': {
          color: 'inherit',
        },

        '> *': {
          cursor: 'pointer',
          textDecoration: 'none',
        },
      },
    },
  },
} as Record<string, SxProps>;

export default styles;