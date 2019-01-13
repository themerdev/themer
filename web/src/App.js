import React, { PureComponent } from 'react';
import styles from './App.module.css';
import { UrlStateProvider } from './UrlState';

import ColorState from './ColorState';
import ColorSetInputs from './ColorSetInputs';
import TextPreviews from './TextPreviews';
import WallpaperPreview from './WallpaperPreview';
import PreBuiltList from './PreBuiltList';
import Download from './Download';
import Link from './Link';
import CopyUrl from './CopyUrl';

export default class App extends PureComponent {
  state = { keyboarding: false };

  render() {
    return (
      <UrlStateProvider history={ this.props.history }>
        <ColorState>
          { ({ getColor }) => (
            <div
              className={ `${styles.app} ${this.state.keyboarding ? styles.keyboarding : ''}` }
              style={{
                backgroundColor: getColor('shade0'),
                '--selection-foreground-color': getColor('shade0'),
                '--selection-background-color': getColor('accent5'),
                '--focus-outline-color': getColor('accent6'),
              }}
            >
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
                <p className={ styles.help } style={{ color: getColor('shade6', 'shade7') }}>Input your colors using any CSS format (keyword, hsl, rgb, etc.).</p>
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
              <div className={ styles.shape } style={{ '--shape-color': getColor('shade1', 'shade0') }}>
                <div className={ styles.container }>
                  <p style={{ color: getColor('shade7') }}>
                    <span style={{ color: getColor('accent1', 'shade7') }}>Pro tip:</span>
                    {' '}
                    The current URL uniquely identifies your current theme. Bookmark it, email it, or share it however you like.
                    <CopyUrl className={ styles.copyUrl }/>
                  </p>
                </div>
              </div>
              <footer className={ styles.footer } style={{ color: getColor('shade3', 'shade7') }}>
                themer is free and open source software, made by <Link href="https://mjswensen.com">mjswensen</Link> with <Link href="https://github.com/mjswensen/themer/graphs/contributors">contributors</Link>, and is released under the MIT license
              </footer>
            </div>
          ) }
        </ColorState>
      </UrlStateProvider>
    );
  }

  onKeyDown = (evt) => {
    if (evt.key === 'Tab') {
      this.setState({ keyboarding: true });
    }
  }

  onMouseDown = () => {
    this.setState({ keyboarding: false });
  }

  componentDidMount() {
    window.document.addEventListener('keydown', this.onKeyDown);
    window.document.addEventListener('mousedown', this.onMouseDown);
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.onKeyDown);
    window.document.removeEventListener('mousedown', this.onMouseDown);
  }
}
