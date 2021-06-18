import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Main from './Main';

export default ({ history }) => (
  <ThemeProvider history={history}>
    <Main />
  </ThemeProvider>
);
