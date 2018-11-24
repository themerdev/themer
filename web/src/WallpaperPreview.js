import React, { PureComponent } from 'react';
import { UrlStateConsumer } from './UrlState';
import Tabs from './Tabs';
import Radio from './Radio';

export default class WallpaperPreview extends PureComponent {
  render() {
    return (
      <UrlStateConsumer>
        { ({ getValueOrFallback, mergeState }) => (
          <Tabs>
            { ({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
              <div>
                <span
                  className={ tabClassName }
                  style={ getTabStyle(true) }
                  >Wallpaper</span>
                <div className={ contentClassName } style={ contentStyle }>
                  <Radio value={ getValueOrFallback([['activeWallpaper']]) === 'none' } label="None" />
                </div>
              </div>
            ) }
          </Tabs>
        ) }
      </UrlStateConsumer>
    );
  }
}
