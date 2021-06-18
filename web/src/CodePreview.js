import React, { useContext } from 'react';
import styles from './CodePreview.module.css';
import { cursor } from './cursor.module.css';
import ThemeContext from './ThemeContext';

export default () => {
  const { activePreparedColorSet } = useContext(ThemeContext);
  const fgs1 = { color: activePreparedColorSet['shade1'] },
    fgs3 = { color: activePreparedColorSet['shade3'] },
    fgs5 = { color: activePreparedColorSet['shade5'] },
    fgs7 = { color: activePreparedColorSet['shade7'] },
    fga0 = { color: activePreparedColorSet['accent0'] },
    fga2 = { color: activePreparedColorSet['accent2'] },
    fga3 = { color: activePreparedColorSet['accent3'] },
    fga5 = { color: activePreparedColorSet['accent5'] },
    fga6 = { color: activePreparedColorSet['accent6'] },
    fga7 = { color: activePreparedColorSet['accent7'] },
    bgs0 = { backgroundColor: activePreparedColorSet['shade0'] },
    bla6 = { borderLeftColor: activePreparedColorSet['accent6'] };
  return (
    <pre className={styles.pre}>
      <code style={fgs7}>
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 1 '}
        </span>
        <span style={fga6}>{'import'}</span>
        {' map '}
        <span style={fga6}>{'from '}</span>
        <span style={fga3}>{"'map.js'"}</span>;{'\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 2 '}
        </span>
        <span style={fga6}>{'import'}</span>
        {' basePickBy '}
        <span style={fga6}>{'from '}</span>
        <span style={fga3}>{"'./.internal/basePickBy.js'"}</span>
        {';\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 3 '}
        </span>
        <span style={fga6}>{'import'}</span>
        {' getAllKeysIn '}
        <span style={fga6}>{'from '}</span>
        <span style={fga3}>{"'./.internal/getAllKeysIn.js'"}</span>
        {';\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 4 '}
        </span>
        {'\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 5 '}
        </span>
        <span style={fgs3}>{'/**\n'}</span>
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 6 '}
        </span>
        <span style={fgs3}>
          {
            ' * Creates an object composed of the `object` properties `predicate` returns\n'
          }
        </span>
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 7 '}
        </span>
        <span style={fgs3}>
          {
            ' * truthy for. The predicate is invoked with two arguments: (value, key).\n'
          }
        </span>
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 8 '}
        </span>
        <span style={fgs3}>{' */\n'}</span>
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {' 9 '}
        </span>
        <span style={fga7}>{'function '}</span>
        <span style={fga2}>{'pickBy'}</span>
        {'(object, predicate) {\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {'10 '}
        </span>
        <span style={fga5}>{'  if '}</span>
        {'(object'}
        <span style={fga5}>{' == '}</span>
        <span style={fga7}>{'null'}</span>
        {') {\n'}
        <span style={{ ...fgs5, ...bgs0 }} className={styles.lineNumber}>
          {'11 '}
        </span>
        <span style={fga5}>{'    return '}</span>
        {'{};'}
        <span style={bla6} className={[styles.cursor, cursor].join(' ')}></span>
        {'\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {'12 '}
        </span>
        {'  }\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {'13 '}
        </span>
        <span style={fga7}>{'  const '}</span>
        {'props'}
        <span style={fga5}>{' = '}</span>
        {'map(getAllKeysIn(object), prop'}
        <span style={fga7}>{' => '}</span>
        {'[prop]);\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {'14 '}
        </span>
        <span style={fga5}>{'  return '}</span>
        {'basePickBy(object, props, (value, path)'}
        <span style={fga7}>{' => '}</span>
        {'predicate(value, path['}
        <span style={fga0}>{'0'}</span>
        {']));\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {'15 '}
        </span>
        {'}\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {'16 '}
        </span>
        {'\n'}
        <span style={{ ...fgs1, ...bgs0 }} className={styles.lineNumber}>
          {'17 '}
        </span>
        <span style={fga6}>{'export '}</span>
        <span style={fga7}>{'default '}</span>
        {'pickBy;'}
      </code>
    </pre>
  );
};
