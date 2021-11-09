import { useContext, useState } from 'react';
import ProTheme from './ProTheme';
import ThemeContext from './ThemeContext';
import Tabs from './Tabs';

import styles from './ProThemes.module.css';

const ProThemes = () => {
  const { proThemes } = useContext(ThemeContext);
  const [currentTab, setCurrentTab] = useState(proThemes[0].title);
  return (
    <Tabs>
      {({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
        <>
          <div>
            {proThemes.map(({ title }) => (
              <button
                key={`tab-${title}`}
                className={tabClassName}
                style={getTabStyle(currentTab === title)}
                onClick={() => setCurrentTab(title)}
              >
                {title}
              </button>
            ))}
          </div>
          <div className={contentClassName} style={contentStyle}>
            {proThemes
              .filter(({ title }) => title === currentTab)
              .map(({ title, themes }) => (
                <div
                  key={`content-${title}`}
                  className={[
                    styles.section,
                    currentTab === 'Featured' && styles.featured,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {themes.map((theme) => (
                    <ProTheme theme={theme} key={theme.title} />
                  ))}
                </div>
              ))}
          </div>
        </>
      )}
    </Tabs>
  );
};

export default ProThemes;
