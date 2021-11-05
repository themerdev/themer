import { useContext, useState } from 'react';
import Tabs from './Tabs';
import ThemeContext from './ThemeContext';
import ColorSetInputs from './ColorSetInputs';
import ProThemes from './ProThemes';

import styles from './ColorSetSelector.module.css';

const ColorSetSelector = () => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const [showPro, setShowPro] = useState(true);
  return (
    <Tabs>
      {({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
        <>
          <div>
            <button
              className={tabClassName}
              style={getTabStyle(showPro)}
              onClick={() => {
                setShowPro(true);
              }}
            >
              Pro themes
            </button>
            <button
              className={tabClassName}
              style={getTabStyle(!showPro)}
              onClick={() => {
                setShowPro(false);
              }}
            >
              Build your own
            </button>
          </div>
          <div className={contentClassName} style={contentStyle}>
            {showPro ? (
              <ProThemes />
            ) : (
              <>
                <p
                  className={styles.help}
                  style={{ color: getActiveColorOrFallback(['shade6']) }}
                >
                  Input your colors using any CSS format (keyword, hsl, rgb,
                  etc.).
                </p>
                <ColorSetInputs />
              </>
            )}
          </div>
        </>
      )}
    </Tabs>
  );
};

export default ColorSetSelector;
