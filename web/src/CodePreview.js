import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import styles from './CodePreview.module.css';
import { cursor } from './cursor.module.css';

export default class CodePreview extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <pre className={ styles.pre }>
            <code style={{ color: getColor('shade7') }}>
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 1 </span>
              <span style={{ color: getColor('accent6', 'shade7') }}>import</span>
              {' map '}
              <span style={{ color: getColor('accent6', 'shade7') }}>from </span>
              <span style={{ color: getColor('accent3', 'shade7') }}>'map.js'</span>
              ;
              {'\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 2 </span>
              <span style={{ color: getColor('accent6', 'shade7') }}>import</span>
              {' basePickBy '}
              <span style={{ color: getColor('accent6', 'shade7') }}>from </span>
              <span style={{ color: getColor('accent3', 'shade7') }}>'./.internal/basePickBy.js'</span>
              ;
              {'\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 3 </span>
              <span style={{ color: getColor('accent6', 'shade7') }}>import</span>
              {' getAllKeysIn '}
              <span style={{ color: getColor('accent6', 'shade7') }}>from </span>
              <span style={{ color: getColor('accent3', 'shade7') }}>'./.internal/getAllKeysIn.js'</span>
              ;
              {'\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 4 </span>
              {'\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 5 </span>
              <span style={{ color: getColor('shade2', 'shade7') }}>{'/**\n'}</span>
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 6 </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> * Creates an object composed of the `object` properties `predicate` returns{'\n'}</span>
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 7 </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> * truthy for. The predicate is invoked with two arguments: (value, key).{'\n'}</span>
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 8 </span>
              <span style={{ color: getColor('shade2', 'shade7') }}> */{'\n'}</span>
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }> 9 </span>
              <span style={{ color: getColor('accent7', 'shade7') }}>function </span>
              <span style={{ color: getColor('accent2', 'shade7') }}>pickBy</span>
              (object, predicate)
              {' {\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>10 </span>
              <span style={{ color: getColor('accent5', 'shade7') }}>  if </span>
              (object
              <span style={{ color: getColor('accent5', 'shade7') }}> == </span>
              <span style={{ color: getColor('accent7', 'shade7') }}>null</span>
              {') {\n'}
              <span style={{ color: getColor('shade5', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>11 </span>
              <span style={{ color: getColor('accent5', 'shade7') }}>    return </span>
              {'{};'}
              <span style={{ borderLeftColor: getColor('accent6', 'shade7') }} className={ [styles.cursor, cursor].join(' ') }></span>
              {'\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>12 </span>
              {'  }\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>13 </span>
              <span style={{ color: getColor('accent7', 'shade7') }}>  const </span>
              props
              <span style={{ color: getColor('accent5', 'shade7') }}> = </span>
              map(getAllKeysIn(object), prop
              <span style={{ color: getColor('accent7', 'shade7') }}> => </span>
              {'[prop]);\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>14 </span>
              <span style={{ color: getColor('accent5', 'shade7') }}>  return </span>
              basePickBy(object, props, (value, path)
              <span style={{ color: getColor('accent7', 'shade7') }}> => </span>
              predicate(value, path[
              <span style={{ color: getColor('accent0', 'shade7') }}>0</span>
              {']));\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>15 </span>
              {'}\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>16 </span>
              {'\n'}
              <span style={{ color: getColor('shade1', 'shade7'), backgroundColor: getColor('shade0') }} className={ styles.lineNumber }>17 </span>
              <span style={{ color: getColor('accent6', 'shade7') }}>export </span>
              <span style={{ color: getColor('accent7', 'shade7') }}>default </span>
              pickBy;
            </code>
          </pre>
        ) }
      </ColorState>
    );
  }
}
