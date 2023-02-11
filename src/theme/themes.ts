import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import typography from './typography';

const themeOptions: ThemeOptions = {
  palette: palette,
  typography,
  breakpoints,
  shape: { borderRadius: 8 },
  direction: 'ltr',
  shadows: shadows,
  customShadows: customShadows,
};

const theme = createTheme(themeOptions);
theme.components = componentsOverride(theme);
theme.components!.MuiCssBaseline = {
  styleOverrides: {
    '&::-webkit-scrollbar': {
      width: 12,
    },

    '&::-webkit-scrollbar-track': {
      background: theme.palette.grey[0],
      borderRadius: 8,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[300],
      borderRadius: 10,
      border: `4px solid ${theme.palette.grey[0]}`,
    },
    body: {
      margin: 0,
      '&::-webkit-scrollbar': {
        width: 12,
      },

      '&::-webkit-scrollbar-track': {
        background: theme.palette.grey[0],
        borderRadius: 8,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.grey[300],
        borderRadius: 10,
        border: `4px solid ${theme.palette.grey[0]}`,
      },
    },
    a: {
      textDecoration: 'inherit',
      color: 'inherit',
    },
  },
};

export default theme;
