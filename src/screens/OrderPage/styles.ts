import { SxProps } from '@mui/material';

const styles = {
  label: {
    mb: 0.5,
    fontSize: 'body2.fontSize',
  },

  input: {
    mb: 1.5,
    backgroundColor: 'background.default',
    borderRadius: 2,
    width: '100%',
    px: 1.5,

    '& input.Mui-disabled': {
      color: 'text.primary',
      WebkitTextFillColor: 'inherit',
    },

    fieldset: {
      display: 'none',
    },
  },

  order: {
    display: 'flex',
    flexDirection: ['column', 'column', 'row'],
    mt: 2,
    columnGap: 3,
    rowGap: 2,
  },

  wrap: {
    p: 3,
    borderRadius: 3,
    backgroundColor: 'background.paper',
  },

  qr: {
    textAlign: 'center',
    py: 2,

    svg: {
      width: ['100%', 'auto'],
    },
  },
} as Record<string, SxProps>;

export default styles;
