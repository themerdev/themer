import React, { PureComponent } from 'react';
import styles from './App.module.css';
import { UrlStateProvider } from './UrlState';

import ColorState from './ColorState';
import ColorSetInputs from './ColorSetInputs';
import TextPreviews from './TextPreviews';
import WallpaperPreview from './WallpaperPreview';

export default class App extends PureComponent {
  render() {
    return (
      <UrlStateProvider history={ this.props.history }>
        <ColorState>
          { ({ getColor }) => (
            <div className={ styles.app } style={{ backgroundColor: getColor('shade0') }}>
              <div className={ styles.container }>
                <h1 className={ styles.h1 } style={{ color: getColor('shade7') }}>themer</h1>
                <hr
                  className={ styles.hr }
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to right,
                        ${getColor('accent0', 'shade2', 'shade7')},
                        ${getColor('accent1', 'shade2', 'shade7')},
                        ${getColor('accent2', 'shade2', 'shade7')},
                        ${getColor('accent3', 'shade2', 'shade7')},
                        ${getColor('accent4', 'shade2', 'shade7')},
                        ${getColor('accent4', 'shade2', 'shade7')},
                        ${getColor('accent5', 'shade2', 'shade7')},
                        ${getColor('accent6', 'shade2', 'shade7')},
                        ${getColor('accent7', 'shade2', 'shade7')}
                      )
                    `,
                  }}
                />
                <p style={{ color: getColor('shade6', 'shade7')}}>themer takes a set of colors and generates themes for your apps (editors, terminals, wallpapers, and more).</p>
                <h2 className={ styles.h2 } style={{ color: getColor('shade7')}}>1. Define colors</h2>
                <ColorSetInputs />
                <h2 className={ styles.h2 } style={{ color: getColor('shade7')}}>2. Preview</h2>
                <div className={ styles.previewsContainer }>
                  <TextPreviews />
                  <WallpaperPreview />
                </div>
              </div>
            </div>
          ) }
        </ColorState>
      </UrlStateProvider>
    );
  }
}
