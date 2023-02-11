import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { store } from 'src/store';

import App from './App';
import LanguageProvider from './language/LanguageProvider';
import theme from './theme/themes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
