import React, { PureComponent } from 'react';
import styles from './App.module.css';
import { UrlStateProvider } from './UrlState';

import ColorState from './ColorState';
import ColorSetInputs from './ColorSetInputs';
import TextPreviews from './TextPreviews';
import WallpaperPreview from './WallpaperPreview';
import PreBuiltList from './PreBuiltList';
import Download from './Download';

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
                <p className={ styles.help } style={{ color: getColor('shade6', 'shade7') }}>Input your colors using any CSS format (keyword, hsl, rgb, etc.), or click the droplet icon to get the system color picker.</p>
                <ColorSetInputs />
                <p className={ styles.preBuilt } style={{ color: getColor('shade6', 'shade7') }}>
                  Or start with a pre-built color set:
                </p>
                <PreBuiltList />
                <h2 className={ styles.h2 } style={{ color: getColor('shade7')}}>2. Preview</h2>
                <div className={ styles.previewsContainer }>
                  <TextPreviews />
                  <WallpaperPreview />
                </div>
                <h2 className={ styles.h2 } style={{ color: getColor('shade7')}}>3. Download</h2>
                <p className={ styles.help } style={{ color: getColor('shade6', 'shade7') }}>Select which themes you'd like to generate from your color set.</p>
                <Download />
              </div>
            </div>
          ) }
        </ColorState>
      </UrlStateProvider>
    );
  }
}
