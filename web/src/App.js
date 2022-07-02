import { UrlThemeProvider } from './ThemeContext';
import Main from './Main';
import { PriceProvider } from './PriceContext';

const App = () => (
  <UrlThemeProvider>
    <PriceProvider>
      <Main />
    </PriceProvider>
  </UrlThemeProvider>
);

export default App;
