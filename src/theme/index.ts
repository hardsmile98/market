/* eslint-disable no-use-before-define */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';
import { Settings } from '../types';

const defaultGradient1 = '#300216';
const defaultGradient2 = '#FF7251';

export const customTheme = (settings: Settings | undefined) => createTheme({
  palette: {
    text: {
      primary: settings?.textPrimary || '#000000',
      secondary: settings?.textSecondary || '#575757',
    },
    secondary: {
      main: settings?.secondaryMain || '#300216',
      dark: settings?.secondaryDark || '#541E35',
      light: settings?.secondaryLight || '#FF6A55',
    },

    background: {
      default: settings?.backgroundDefault || '#F7F1EE',
      paper: settings?.backgroundPaper || '#FFFFFF',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '16px',
          overflowX: 'hidden',
          backgroundColor: settings?.backgroundDefault || '#F7F1EE',
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
          color: settings?.backgroundPaper || '#FFFFFF',
          ':hover': {
            color: settings?.backgroundPaper || '#FFFFFF',
          },
        },
      },
    },
  },
}, ruRU);

const createMyTheme = (settings: Settings) => responsiveFontSizes(customTheme(settings));

export default createMyTheme;
