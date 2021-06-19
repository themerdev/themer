import { ThemeProvider } from './ThemeContext';
import Main from './Main';

const App = ({ history }) => (
  <ThemeProvider history={history}>
    <Main />
  </ThemeProvider>
);

export default App;
