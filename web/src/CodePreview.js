import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import styles from './CodePreview.module.css';

export default class CodePreview extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <pre className={ styles.pre }>
            <code style={{ color: getColor('shade7') }}>
              <span style={{ color: getColor('accent6') }}>import</span>
              {' map '}
              <span style={{ color: getColor('accent6') }}>from </span>
              <span style={{ color: getColor('accent3') }}>'map.js'</span>
              ;
              {'\n'}
              <span style={{ color: getColor('accent6') }}>import</span>
              {' basePickBy '}
              <span style={{ color: getColor('accent6') }}>from </span>
              <span style={{ color: getColor('accent3') }}>'./.internal/basePickBy.js'</span>
              ;
              {'\n'}
              <span style={{ color: getColor('accent6') }}>import</span>
              {' getAllKeysIn '}
              <span style={{ color: getColor('accent6') }}>from </span>
              <span style={{ color: getColor('accent3') }}>'./.internal/getAllKeysIn.js'</span>
              ;
              {'\n\n'}
              <span style={{ color: getColor('shade2', 'shade7') }}>{'/**\n'}</span>
              <span style={{ color: getColor('shade2', 'shade7') }}> * Creates an object composed of the `object` properties `predicate` returns{'\n'}</span>
              <span style={{ color: getColor('shade2', 'shade7') }}> * truthy for. The predicate is invoked with two arguments: (value, key).{'\n'}</span>
              <span style={{ color: getColor('shade2', 'shade7') }}> */{'\n'}</span>
              <span style={{ color: getColor('accent7') }}>function </span>
              <span style={{ color: getColor('accent2') }}>pickBy</span>
              (object, predicate)
              {' {\n'}
              <span style={{ color: getColor('accent5') }}>  if </span>
              (object
              <span style={{ color: getColor('accent5') }}> == </span>
              <span style={{ color: getColor('accent7') }}>null</span>
              {') {\n'}
              <span style={{ color: getColor('accent5') }}>    return </span>
              {'{};\n  }\n'}
              <span style={{ color: getColor('accent7') }}>  const </span>
              props
              <span style={{ color: getColor('accent5') }}> = </span>
              map(getAllKeysIn(object), prop
              <span style={{ color: getColor('accent7') }}> => </span>
              {'[prop]);\n'}
              <span style={{ color: getColor('accent5') }}>  return </span>
              basePickBy(object, props, (value, path)
              <span style={{ color: getColor('accent7') }}> => </span>
              predicate(value, path[
              <span style={{ color: getColor('accent0') }}>0</span>
              {']));\n}\n\n'}
              <span style={{ color: getColor('accent6') }}>export </span>
              <span style={{ color: getColor('accent7') }}>default </span>
              pickBy;
            </code>
          </pre>
        ) }
      </ColorState>
    );
  }
}
