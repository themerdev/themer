import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import qs from 'qs';
import { merge, has, get } from 'lodash';

const UrlStateContext = React.createContext();
const history = createBrowserHistory();

const stateFromParams = search => qs.parse(search, { allowDots: true, ignoreQueryPrefix: true });
const paramsFromState = state => qs.stringify(state, { allowDots: true, addQueryPrefix: true });

const fallbackState = {
  colors: {
    dark: {
      shade0: 'black',
      shade1: 'black',
      shade2: 'black',
      shade3: 'black',
      shade4: 'black',
      shade5: 'black',
      shade6: 'black',
      shade7: 'white',
      accent0: 'white',
      accent1: 'white',
      accent2: 'white',
      accent3: 'white',
      accent4: 'white',
      accent5: 'white',
      accent6: 'white',
      accent7: 'white',
    },
    light: {
      shade0: 'white',
      shade1: 'white',
      shade2: 'white',
      shade3: 'white',
      shade4: 'white',
      shade5: 'white',
      shade6: 'white',
      shade7: 'black',
      accent0: 'black',
      accent1: 'black',
      accent2: 'black',
      accent3: 'black',
      accent4: 'black',
      accent5: 'black',
      accent6: 'black',
      accent7: 'black',
    },
  },
  activeColorSet: 'dark',
};

export class UrlStateProvider extends Component {
  constructor(...args) {
    super(...args);
    this.state = stateFromParams(history.location.search);
    this.listener = history.listen(location => {
      this.setState(stateFromParams(location.search));
    });
  }

  render() {
    return (
      <UrlStateContext.Provider value={{
        urlState: this.state, // may not need this any more
        // urlState: merge({}, this.defaultState, this.state),
        getCascadedState: this.getCascadedState,
        mergeState: this.mergeState,
      }}>
        { this.props.children }
      </UrlStateContext.Provider>
    );
  }

  getCascadedState = (paths, fallbackPath = paths[paths.length - 1]) => {
    for(let path of paths) {
      // console.log('checking path', path);
      if (has(this.state, path)) {
        // console.log('returning', get(this.state, path));
        return get(this.state, path);
      }
    }
    // console.log('falling back', get(fallbackState, fallbackPath));
    return get(fallbackState, fallbackPath);
  }

  mergeState = (state) => {
    history.replace(paramsFromState(merge({}, this.state, state)));
  }

  componentWillUnmount() {
    this.listener();
  }
}

export const UrlStateConsumer = UrlStateContext.Consumer;
