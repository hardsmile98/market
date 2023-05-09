import { SxProps } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', 'space-between'],
    flexWrap: 'wrap',
  },

  logo: {
    width: ['100%', 'auto'],
    textAlign: ['center', 'left'],
  },

  menu: {
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
      },
    },
  },
} as Record<string, SxProps>;

export default styles;
