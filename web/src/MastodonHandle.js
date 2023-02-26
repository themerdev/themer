import { useContext } from 'react';
import styles from './MastodonHandle.module.css';
import ThemeContext from './ThemeContext';

const MastodonHandle = () => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);

  return (
    <a
      className={styles.handle}
      style={{
        '--handle-resting-background-color': getActiveColorOrFallback(
          ['shade1'],
          true,
        ),
        '--handle-hover-background-color': getActiveColorOrFallback(
          ['shade2'],
          true,
        ),
        '--handle-active-background-color': getActiveColorOrFallback(
          ['shade0'],
          true,
        ),
        'color': getActiveColorOrFallback(['shade7']),
      }}
      href='https://fosstodon.org/@themer'
      target='_blank'
      rel='noopener noreferrer'
    >
      Follow @themer
    </a>
  );
};

export default MastodonHandle;
