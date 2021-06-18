import React, { useContext } from 'react';
import styles from './TerminalPreview.module.css';
import { cursor } from './cursor.module.css';
import ThemeContext from './ThemeContext';

export default () => {
  const { activePreparedColorSet } = useContext(ThemeContext);
  const fgs0 = { color: activePreparedColorSet['shade0'] },
    fgs2 = { color: activePreparedColorSet['shade2'] },
    fgs3 = { color: activePreparedColorSet['shade3'] },
    fgs5 = { color: activePreparedColorSet['shade5'] },
    fgs6 = { color: activePreparedColorSet['shade6'] },
    fgs7 = { color: activePreparedColorSet['shade7'] },
    fga3 = { color: activePreparedColorSet['accent3'] },
    fga4 = { color: activePreparedColorSet['accent4'] },
    fga7 = { color: activePreparedColorSet['accent7'] },
    bgs5 = { backgroundColor: activePreparedColorSet['shade5'] },
    bga3 = { backgroundColor: activePreparedColorSet['accent3'] };
  return (
    <pre className={styles.pre}>
      <code>
        <span style={fga4}>{'~/project'}</span>
        <span style={fga7}>{'(branch*) '}</span>
        <span style={fga3}>{'|> '}</span>
        <span style={fgs5}>{'yarn test'}</span>
        {'\n'}
        <span style={fgs2}>{'$ jest'}</span>
        {'\n'}
        <span style={{ ...fgs0, ...bga3 }}>{' PASS '}</span>
        <span style={fgs2}>{' packages/themer/lib/'}</span>
        <span style={fgs7}>{'prepare.spec.js'}</span>
        {'\n'}
        <span style={{ ...fgs0, ...bga3 }}>{' PASS '}</span>
        <span style={fgs2}>{' packages/themer-wallpaper-triangles/lib/'}</span>
        <span style={fgs7}>{'index.spec.js'}</span>
        {'\n'}
        <span style={{ ...fgs0, ...bga3 }}>{' PASS '}</span>
        <span style={fgs2}>{' packages/themer-vscode/lib/'}</span>
        <span style={fgs7}>{'index.spec.js'}</span>
        {'\n'}
        <span style={{ ...fgs0, ...bga3 }}>{' PASS '}</span>
        <span style={fgs2}>{' packages/themer-utils/lib/'}</span>
        <span style={fgs7}>{'index.spec.js'}</span>
        {'\n'}
        <span style={{ ...fgs0, ...bga3 }}>{' PASS '}</span>
        <span style={fgs2}>{' packages/themer-wallpaper-octagon/lib/'}</span>
        <span style={fgs7}>{'index.spec.js'}</span>
        {'\n'}
        <span style={{ ...fgs0, ...bga3 }}>{' PASS '}</span>
        <span style={fgs2}>{' packages/themer-atom-syntax/lib/'}</span>
        <span style={fgs7}>{'index.spec.js'}</span>
        {'\n'}
        <span style={{ ...fgs0, ...bga3 }}>{' PASS '}</span>
        <span style={fgs2}>{' packages/themer-chrome/lib/'}</span>
        <span style={fgs7}>{'index.spec.js'}</span>
        {'\n'}
        <span style={fga3}>{'...'}</span>
        {'\n\n'}
        <span style={fgs7}>{'Test Suites:'}</span>
        <span style={fga4}>{' 42 passed'}</span>
        <span style={fgs6}>{', 42 total'}</span>
        {'\n'}
        <span style={fgs7}>{'Tests:'}</span>
        <span style={fga4}>{'       145 passed'}</span>
        <span style={fgs6}>{', 145 total'}</span>
        {'\n'}
        <span style={fgs7}>{'Snapshots:'}</span>
        <span style={fga4}>{'   102 passed'}</span>
        <span style={fgs6}>{', 102 total'}</span>
        {'\n'}
        <span style={fgs7}>{'Time:'}</span>
        <span style={fgs6}>{'        5.626s'}</span>
        {'\n'}
        <span style={fgs3}>{'Ran all test suites.'}</span>
        {'\n'}
        <span style={fga4}>{'~/project'}</span>
        <span style={fga7}>{'(branch*) '}</span>
        <span style={fga3}>{'|> '}</span>
        <span style={bgs5} className={cursor}>
          {' '}
        </span>
      </code>
    </pre>
  );
};
