import React, { useContext } from 'react';
import styles from './TerminalPreview.module.css';
import { cursor } from './cursor.module.css';
import ThemeContext from './ThemeContext';

export default () => {
  const { activePreparedColorSet } = useContext(ThemeContext);
  return (
    <pre className={ styles.pre }>
      <code>
        <span style={{ color: activePreparedColorSet['accent4'] }}>~/project</span>
        <span style={{ color: activePreparedColorSet['accent7'] }}>(branch*) </span>
        <span style={{ color: activePreparedColorSet['accent3'] }}>|> </span>
        <span style={{ color: activePreparedColorSet['shade5'] }}>yarn test</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade2'] }}>$ jest</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade0'], backgroundColor: activePreparedColorSet['accent3'] }}> PASS </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> packages/themer/lib/</span>
        <span style={{ color: activePreparedColorSet['shade7'] }}>prepare.spec.js</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade0'], backgroundColor: activePreparedColorSet['accent3'] }}> PASS </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> packages/themer-wallpaper-triangles/lib/</span>
        <span style={{ color: activePreparedColorSet['shade7'] }}>index.spec.js</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade0'], backgroundColor: activePreparedColorSet['accent3'] }}> PASS </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> packages/themer-vscode/lib/</span>
        <span style={{ color: activePreparedColorSet['shade7'] }}>index.spec.js</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade0'], backgroundColor: activePreparedColorSet['accent3'] }}> PASS </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> packages/themer-utils/lib/</span>
        <span style={{ color: activePreparedColorSet['shade7'] }}>index.spec.js</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade0'], backgroundColor: activePreparedColorSet['accent3'] }}> PASS </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> packages/themer-wallpaper-octagon/lib/</span>
        <span style={{ color: activePreparedColorSet['shade7'] }}>index.spec.js</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade0'], backgroundColor: activePreparedColorSet['accent3'] }}> PASS </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> packages/themer-atom-syntax/lib/</span>
        <span style={{ color: activePreparedColorSet['shade7'] }}>index.spec.js</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade0'], backgroundColor: activePreparedColorSet['accent3'] }}> PASS </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> packages/themer-chrome/lib/</span>
        <span style={{ color: activePreparedColorSet['shade7'] }}>index.spec.js</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['accent3'] }}>...</span>
        {'\n\n'}
        <span style={{ color: activePreparedColorSet['shade7'] }}>Test Suites: </span>
        <span style={{ color: activePreparedColorSet['accent4'] }}>42 passed</span>
        <span style={{ color: activePreparedColorSet['shade6'] }}>, 42 total</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade7'] }}>Tests:       </span>
        <span style={{ color: activePreparedColorSet['accent4'] }}>145 passed</span>
        <span style={{ color: activePreparedColorSet['shade6'] }}>, 145 total</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade7'] }}>Snapshots:   </span>
        <span style={{ color: activePreparedColorSet['accent4'] }}>102 passed</span>
        <span style={{ color: activePreparedColorSet['shade6'] }}>, 102 total</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade7'] }}>Time:        </span>
        <span style={{ color: activePreparedColorSet['shade6'] }}>5.626s</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade3'] }}>Ran all test suites.</span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['accent4'] }}>~/project</span>
        <span style={{ color: activePreparedColorSet['accent7'] }}>(branch*) </span>
        <span style={{ color: activePreparedColorSet['accent3'] }}>|> </span>
        <span style={{ backgroundColor: activePreparedColorSet['shade5'] }} className={ cursor }> </span>
      </code>
    </pre>
  );
};
