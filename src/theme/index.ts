import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';

export const gradient = 'linear-gradient(94.13deg, #300216 -7.33%, #FF7251 125.29%)';
export const buttonColor = '#FFA1A1';
export const white = '#fff';

const customTheme = createTheme({
  palette: {
    text: {
      primary: '#000',
      secondary: '#575757',
    },
    secondary: {
      main: '#300216',
      dark: '#541E35',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '16px',
          overflowX: 'hidden',
          backgroundColor: '#F7F1EE',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: buttonColor,
          background: gradient,
          borderRadius: 32,
          padding: '16px 32px',
          ':hover': {
            color: white,
          },
        },
      },
    },
  },
}, ruRU);

export default responsiveFontSizes(customTheme);
