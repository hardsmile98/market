import { SxProps } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  logo: {
    width: ['100%', '100%', 'auto'],
    textAlign: ['center', 'center', 'left'],
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', 'column', 'row'],
    width: ['100%', '100%', '100%', 'auto'],
  },

  search: {
    width: ['100%', '100%', 320],
    order: [1, 1, 0],
  },

  menu: {
    order: [0, 0, 1],
    pb: [2, 2, 0],
    ml: [0, 0, 6],
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
      justifyContent: ['center', 'flex-start'],
      flexWrap: ['wrap', 'nowrap'],

      li: {
        mt: [1, 1, 0],
        ':not(:last-of-type)': {
          mr: [2, 3, 4],
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
