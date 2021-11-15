import { ThemeProvider } from './ThemeContext';
import Main from './Main';
import { PriceProvider } from './PriceContext';

const App = ({ history }) => (
  <ThemeProvider history={history}>
    <PriceProvider>
      <Main />
    </PriceProvider>
  </ThemeProvider>
);

export default App;
