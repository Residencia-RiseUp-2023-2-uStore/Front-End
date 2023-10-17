import { createContext, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

const colors = {
  primary: {
    100: '#FD9B28',
    200: '#0E46C9',
    300: '#00BBFF',
  },
};

export const themeSettings = () => {
  return {
    palette: {
      primary: {
        main: colors.primary[100],
      },
      secondary: {
        main: colors.primary[200],
      },
      background: {
        default: '#fcfcfc',
      },
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
    },
  };
};

export const ColorModeContext = createContext();

export const useMode = () => {
  const colorMode = useMemo(() => ({ mode: 'fixed' }), []);
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return [theme, colorMode];
};