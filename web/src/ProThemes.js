import { useContext } from 'react';
import ProTheme from './ProTheme';
import ThemeContext from './ThemeContext';

import styles from './ProThemes.module.css';

const ProThemes = () => {
  const { proThemes, getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <main className={styles.container}>
      {proThemes.map(({ title, themes }) => (
        <>
          <h3
            className={styles.title}
            style={{
              color: getActiveColorOrFallback(['shade6']),
              backgroundColor: getActiveColorOrFallback(['shade0'], true),
            }}
          >
            {title}
          </h3>
          {themes.map((theme) => (
            <ProTheme
              theme={theme}
              key={theme.title}
              className={theme.featured && styles.featured}
            />
          ))}
        </>
      ))}
    </main>
  );
};

export default ProThemes;
