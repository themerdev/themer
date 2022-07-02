import ReactDOM from 'react-dom';
import App from './App';

import { createMemoryHistory } from 'history';

it('renders without crashing', () => {
  window.__ssa__log = () => {};
  const div = document.createElement('div');
  ReactDOM.render(<App history={createMemoryHistory()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
