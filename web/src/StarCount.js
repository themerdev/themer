import React, { useState, useEffect, useContext } from 'react';
import numeral from 'numeral';
import styles from './StarCount.module.css';
import ThemeContext from './ThemeContext';

export default () => {
  const [count, setCount] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/mjswensen/themer',
        );
        const { stargazers_count: count } = await response.json();
        setCount(numeral(count).format('0.0a'));
      } catch {}
    })();
  }, []);

  const { getActiveColorOrFallback } = useContext(ThemeContext);

  return (
    <span
      style={{
        '--star-count-resting-background-color': getActiveColorOrFallback(
          ['shade1'],
          true,
        ),
        '--star-count-hover-background-color': getActiveColorOrFallback(
          ['shade2'],
          true,
        ),
        '--star-count-active-background-color': getActiveColorOrFallback(
          ['shade0'],
          true,
        ),
      }}
    >
      <a
        className={styles.star}
        style={{ color: getActiveColorOrFallback(['shade7']) }}
        href='https://github.com/mjswensen/themer'
        target='_blank'
        rel='noopener noreferrer'
      >
        Star on GitHub
      </a>
      {count ? (
        <a
          className={styles.stargazers}
          style={{ color: getActiveColorOrFallback(['shade7']) }}
          href='https://github.com/mjswensen/themer/stargazers'
          target='_blank'
          rel='noopener noreferrer'
        >
          {count}
        </a>
      ) : null}
    </span>
  );
};
