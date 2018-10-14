import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import qs from 'qs';
import { merge } from 'lodash';

const UrlStateContext = React.createContext();
const history = createBrowserHistory();

export const stateFromParams = search => qs.parse(search, { allowDots: true, ignoreQueryPrefix: true });
export const paramsFromState = state => qs.stringify(state, { allowDots: true, addQueryPrefix: true });

export class UrlStateProvider extends Component {
  defaultState = {
    colors: {
      dark: {
        shade0: '',
        shade1: '',
        shade2: '',
        shade3: '',
        shade4: '',
        shade5: '',
        shade6: '',
        shade7: '',
        accent0: '',
        accent1: '',
        accent2: '',
        accent3: '',
        accent4: '',
        accent5: '',
        accent6: '',
        accent7: '',
      },
      light: {
        shade0: '',
        shade1: '',
        shade2: '',
        shade3: '',
        shade4: '',
        shade5: '',
        shade6: '',
        shade7: '',
        accent0: '',
        accent1: '',
        accent2: '',
        accent3: '',
        accent4: '',
        accent5: '',
        accent6: '',
        accent7: '',
      },
    },
    activeColorSet: 'dark',
  };
  
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
        urlState: merge({}, this.defaultState, this.state),
        mergeState: this.mergeState
      }}>
        { this.props.children }
      </UrlStateContext.Provider>
    );
  }

  mergeState = (state) => {
    history.replace(paramsFromState(merge({}, this.state, state)));
  }

  componentWillUnmount() {
    this.listener();
  }
}

export const UrlStateConsumer = UrlStateContext.Consumer;
