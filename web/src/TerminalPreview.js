import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import styles from './TerminalPreview.module.css';

export default class TerminalPreview extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <pre className={ styles.pre }>
            <code>
              <span style={{ color: getColor('accent4') }}>~/project</span>
              <span style={{ color: getColor('accent7') }}>(branch*) </span>
              <span style={{ color: getColor('accent3') }}>|> </span>
              <span style={{ color: getColor('shade5', 'shade7') }}>yarn test</span>
              {'\n'}
              <span style={{ color: getColor('shade2', 'shade7') }}>$ jest</span>
              {'\n'}
              <span style={{ color: getColor('shade0'), backgroundColor: getColor('accent3', 'shade7') }}> PASS </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> packages/themer/lib/</span>
              <span style={{ color: getColor('shade7') }}>prepare.spec.js</span>
              {'\n'}
              <span style={{ color: getColor('shade0'), backgroundColor: getColor('accent3', 'shade7') }}> PASS </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> packages/themer-wallpaper-triangles/lib/</span>
              <span style={{ color: getColor('shade7') }}>index.spec.js</span>
              {'\n'}
              <span style={{ color: getColor('shade0'), backgroundColor: getColor('accent3', 'shade7') }}> PASS </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> packages/themer-vscode/lib/</span>
              <span style={{ color: getColor('shade7') }}>index.spec.js</span>
              {'\n'}
              <span style={{ color: getColor('shade0'), backgroundColor: getColor('accent3', 'shade7') }}> PASS </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> packages/themer-utils/lib/</span>
              <span style={{ color: getColor('shade7') }}>index.spec.js</span>
              {'\n'}
              <span style={{ color: getColor('shade0'), backgroundColor: getColor('accent3', 'shade7') }}> PASS </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> packages/themer-wallpaper-octagon/lib/</span>
              <span style={{ color: getColor('shade7') }}>index.spec.js</span>
              {'\n'}
              <span style={{ color: getColor('shade0'), backgroundColor: getColor('accent3', 'shade7') }}> PASS </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> packages/themer-atom-syntax/lib/</span>
              <span style={{ color: getColor('shade7') }}>index.spec.js</span>
              {'\n'}
              <span style={{ color: getColor('shade0'), backgroundColor: getColor('accent3', 'shade7') }}> PASS </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> packages/themer-chrome/lib/</span>
              <span style={{ color: getColor('shade7') }}>index.spec.js</span>
              {'\n'}
              <span style={{ color: getColor('accent3', 'shade7') }}>...</span>
              {'\n\n'}
              <span style={{ color: getColor('shade7') }}>Test Suites: </span>
              <span style={{ color: getColor('accent4', 'shade7') }}>42 passed</span>
              <span style={{ color: getColor('shade6', 'shade7') }}>, 42 total</span>
              {'\n'}
              <span style={{ color: getColor('shade7') }}>Tests:       </span>
              <span style={{ color: getColor('accent4', 'shade7') }}>145 passed</span>
              <span style={{ color: getColor('shade6', 'shade7') }}>, 145 total</span>
              {'\n'}
              <span style={{ color: getColor('shade7') }}>Snapshots:   </span>
              <span style={{ color: getColor('accent4', 'shade7') }}>102 passed</span>
              <span style={{ color: getColor('shade6', 'shade7') }}>, 102 total</span>
              {'\n'}
              <span style={{ color: getColor('shade7') }}>Time:        </span>
              <span style={{ color: getColor('shade6', 'shade7') }}>5.626s</span>
              {'\n'}
              <span style={{ color: getColor('shade3', 'shade7') }}>Ran all test suites.</span>
              {'\n'}
              <span style={{ color: getColor('accent4') }}>~/project</span>
              <span style={{ color: getColor('accent7') }}>(branch*) </span>
              <span style={{ color: getColor('accent3') }}>|> </span>
              <span style={{ backgroundColor: getColor('shade5', 'shade7') }} className={ styles.terminalCursor }> </span>
            </code>
          </pre>
        ) }
      </ColorState>
    );
  }
}
