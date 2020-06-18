import React, { useState } from 'react';
import CodePreview from './CodePreview';
import TerminalPreview from './TerminalPreview';
import Tabs from './Tabs';
import styles from './TextPreviews.module.css';

export default () => {
  const [activePreview, setActivePreview] = useState('code');

  return (
    <Tabs>
      { ({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
        <div className={ styles.wrapper }>
          <div>
            <button
              className={ tabClassName }
              style={ getTabStyle(activePreview === 'code') }
              onClick={ () => {
                setActivePreview('code');
                window.__ssa__log('change active preview', { preview: 'code' });
              } }
            >Code</button>
            <button
              className={ tabClassName }
              style={ getTabStyle(activePreview === 'terminal') }
              onClick={ () => {
                setActivePreview('terminal');
                window.__ssa__log('change active preview', { preview: 'terminal' });
              } }
            >Terminal</button>
          </div>
          <div className={ contentClassName } style={ contentStyle }>
            { activePreview === 'code' ? (
              <CodePreview />
            ) : null }
            { activePreview === 'terminal' ? (
              <TerminalPreview />
            ) : null }
          </div>
        </div>
      ) }
    </Tabs>
  );
}
