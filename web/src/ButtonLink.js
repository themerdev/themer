import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { ExternalIcon } from './Icons';
import styles from './ButtonLink.module.css';

const ButtonLink = ({ external, children, ...props }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <a
      className={styles.buttonLink}
      style={{
        'color': getActiveColorOrFallback(['accent5']),
        '--button-link-resting-background-color': getActiveColorOrFallback(
          ['shade1'],
          true,
        ),
        '--button-link-hover-background-color': getActiveColorOrFallback(
          ['shade2'],
          true,
        ),
        '--button-link-active-background-color': getActiveColorOrFallback(
          ['shade0'],
          true,
        ),
      }}
      {...props}
    >
      {children}
      {external ? <ExternalIcon className={styles.externalIcon} /> : null}
    </a>
  );
};

export default ButtonLink;
