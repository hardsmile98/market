import { SxProps } from '@mui/material';

const styles = {
  root: {
    p: 2,
  },

  formRow: {
    display: 'flex',
    flexDirection: ['column', 'row'],
  },

  input: {
    mb: 1,
  },

  error: {
    mt: 1,
    textAlign: 'center',
    color: 'error.main',
  },
} as Record<string, SxProps>;

export default styles;
