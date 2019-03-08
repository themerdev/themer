import React, { useContext } from 'react';
import styles from './CodePreview.module.css';
import { cursor } from './cursor.module.css';
import ThemeContext from './ThemeContext';

export default () => {
  const { activePreparedColorSet } = useContext(ThemeContext);
  return (
    <pre className={ styles.pre }>
      <code style={{ color: activePreparedColorSet['shade7'] }}>
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 1 </span>
        <span style={{ color: activePreparedColorSet['accent6'] }}>import</span>
        {' map '}
        <span style={{ color: activePreparedColorSet['accent6'] }}>from </span>
        <span style={{ color: activePreparedColorSet['accent3'] }}>'map.js'</span>
        ;
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 2 </span>
        <span style={{ color: activePreparedColorSet['accent6'] }}>import</span>
        {' basePickBy '}
        <span style={{ color: activePreparedColorSet['accent6'] }}>from </span>
        <span style={{ color: activePreparedColorSet['accent3'] }}>'./.internal/basePickBy.js'</span>
        ;
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 3 </span>
        <span style={{ color: activePreparedColorSet['accent6'] }}>import</span>
        {' getAllKeysIn '}
        <span style={{ color: activePreparedColorSet['accent6'] }}>from </span>
        <span style={{ color: activePreparedColorSet['accent3'] }}>'./.internal/getAllKeysIn.js'</span>
        ;
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 4 </span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 5 </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}>{'/**\n'}</span>
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 6 </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> * Creates an object composed of the `object` properties `predicate` returns{'\n'}</span>
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 7 </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> * truthy for. The predicate is invoked with two arguments: (value, key).{'\n'}</span>
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 8 </span>
        <span style={{ color: activePreparedColorSet['shade2'] }}> */{'\n'}</span>
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }> 9 </span>
        <span style={{ color: activePreparedColorSet['accent7'] }}>function </span>
        <span style={{ color: activePreparedColorSet['accent2'] }}>pickBy</span>
        (object, predicate)
        {' {\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>10 </span>
        <span style={{ color: activePreparedColorSet['accent5'] }}>  if </span>
        (object
        <span style={{ color: activePreparedColorSet['accent5'] }}> == </span>
        <span style={{ color: activePreparedColorSet['accent7'] }}>null</span>
        {') {\n'}
        <span style={{ color: activePreparedColorSet['shade5'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>11 </span>
        <span style={{ color: activePreparedColorSet['accent5'] }}>    return </span>
        {'{};'}
        <span style={{ borderLeftColor: activePreparedColorSet['accent6'] }} className={ [styles.cursor, cursor].join(' ') }></span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>12 </span>
        {'  }\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>13 </span>
        <span style={{ color: activePreparedColorSet['accent7'] }}>  const </span>
        props
        <span style={{ color: activePreparedColorSet['accent5'] }}> = </span>
        map(getAllKeysIn(object), prop
        <span style={{ color: activePreparedColorSet['accent7'] }}> => </span>
        {'[prop]);\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>14 </span>
        <span style={{ color: activePreparedColorSet['accent5'] }}>  return </span>
        basePickBy(object, props, (value, path)
        <span style={{ color: activePreparedColorSet['accent7'] }}> => </span>
        predicate(value, path[
        <span style={{ color: activePreparedColorSet['accent0'] }}>0</span>
        {']));\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>15 </span>
        {'}\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>16 </span>
        {'\n'}
        <span style={{ color: activePreparedColorSet['shade1'], backgroundColor: activePreparedColorSet['shade0'] }} className={ styles.lineNumber }>17 </span>
        <span style={{ color: activePreparedColorSet['accent6'] }}>export </span>
        <span style={{ color: activePreparedColorSet['accent7'] }}>default </span>
        pickBy;
      </code>
    </pre>
  );
};
