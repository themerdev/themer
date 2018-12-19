import React, { PureComponent } from 'react';
import qs from 'qs';
import { merge } from 'lodash';
import getValueOrFallback from './getValueOrFallback';

const UrlStateContext = React.createContext();

const stateFromParams = search => qs.parse(search, { allowDots: true, ignoreQueryPrefix: true });
export const paramsFromState = state => qs.stringify(state, { allowDots: true, addQueryPrefix: true });

const fallbackState = {
  colors: {
    dark: {
      shade0: '#000000',
      shade1: '#000000',
      shade2: '#000000',
      shade3: '#000000',
      shade4: '#000000',
      shade5: '#000000',
      shade6: '#000000',
      shade7: '#FFFFFF',
      accent0: '#FFFFFF',
      accent1: '#FFFFFF',
      accent2: '#FFFFFF',
      accent3: '#FFFFFF',
      accent4: '#FFFFFF',
      accent5: '#FFFFFF',
      accent6: '#FFFFFF',
      accent7: '#FFFFFF',
    },
    light: {
      shade0: '#FFFFFF',
      shade1: '#FFFFFF',
      shade2: '#FFFFFF',
      shade3: '#FFFFFF',
      shade4: '#FFFFFF',
      shade5: '#FFFFFF',
      shade6: '#FFFFFF',
      shade7: '#000000',
      accent0: '#000000',
      accent1: '#000000',
      accent2: '#000000',
      accent3: '#000000',
      accent4: '#000000',
      accent5: '#000000',
      accent6: '#000000',
      accent7: '#000000',
    },
  },
  activeColorSet: 'dark',
  calculateIntermediaryShades: {
    dark: true,
    light: true,
  },
  activeWallpaper: 'none',
};

export class UrlStateProvider extends PureComponent {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = stateFromParams(props.history.location.search);
    this.listener = props.history.listen(location => {
      this.setState(stateFromParams(location.search));
    });
  }

  render() {
    return (
      <UrlStateContext.Provider value={{
        rawState: this.state,
        getValueOrFallback: this.getValueOrFallback,
        mergeState: this.mergeState,
      }}>
        { this.props.children }
      </UrlStateContext.Provider>
    );
  }

  getValueOrFallback = (paths, parse, calculatedState) => {
    return getValueOrFallback(
      this.state,
      calculatedState,
      fallbackState,
      paths,
      parse,
    );
  }

  mergeState = (state) => {
    this.props.history.replace(paramsFromState(merge({}, this.state, state)));
  }

  componentWillUnmount() {
    this.listener();
  }
}

export const UrlStateConsumer = UrlStateContext.Consumer;
