import { useContext } from 'react';
import styles from './Tabs.module.css';
import ThemeContext from './ThemeContext';

export default ({ children }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return children({
    tabClassName: styles.tab,
    getTabStyle: active => ({
      backgroundColor: active ? getActiveColorOrFallback(['shade0'], true) : getActiveColorOrFallback(['shade2'], true),
      color: getActiveColorOrFallback(['shade7']),
      borderColor: getActiveColorOrFallback(['shade7']),
      '--tab-bottom-overlap-color': active
        ? getActiveColorOrFallback(['shade0'], true)
        : getActiveColorOrFallback(['shade2'], true),
      '--tab-bottom-overlap-size': active
        ? 'calc(var(--border-size) * 2)'
        : 'var(--border-size)',
    }),
    contentClassName: styles.tabContent,
    contentStyle: {
      borderColor: getActiveColorOrFallback(['shade7']),
      backgroundColor: getActiveColorOrFallback(['shade0'], true),
    },
  });
};
