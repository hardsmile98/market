/* eslint-disable no-use-before-define */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';
import { Settings } from '../types';

const defaultGradient1 = '#300216';
const defaultGradient2 = '#FF7251';

export const customTheme = (settings: Settings | undefined) => createTheme({
  palette: {
    text: {
      primary: settings?.textPrimary || '#000',
      secondary: settings?.textSecondary || '#575757',
    },
    secondary: {
      main: settings?.secondaryMain || '#300216',
      dark: settings?.secondaryDark || '#541E35',
      light: settings?.secondaryLight || '#FF6A55',
    },

    background: {
      default: settings?.backgroundDefault || '##F7F1EE',
      paper: settings?.backgroundPaper || '#fff',
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
          background: `linear-gradient(94.13deg, ${settings?.gradient1 || defaultGradient1} -7.33%, ${settings?.gradient2 || defaultGradient2} 125.29%)`,
          borderRadius: 32,
          padding: '16px 32px',
          color: settings?.backgroundPaper || '#fff',
          ':hover': {
            color: settings?.backgroundPaper || '#fff',
          },
        },
      },
    },
  },
}, ruRU);

const createMyTheme = (settings: Settings) => responsiveFontSizes(customTheme(settings));

export default createMyTheme;
