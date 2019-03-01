import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import styles from './StarCount.module.css';
import ColorState from './ColorState';

export default () => {
  const [count, setCount] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.github.com/repos/mjswensen/themer');
        const { stargazers_count: count } = await response.json();
        setCount(numeral(count).format('0.0a'));
      } catch {}
    })();
  }, []);

  return (
    <ColorState>
      { ({ getColor }) => (
        <span
          style={{
            '--star-count-resting-background-color': getColor('shade1', 'shade0'),
            '--star-count-hover-background-color': getColor('shade2', 'shade0'),
            '--star-count-active-background-color': getColor('shade0'),
          }}
        >
          <a
            className={ styles.star }
            style={{ color: getColor('shade7') }}
            href="https://github.com/mjswensen/themer"
            target="_blank"
            rel="noopener noreferrer"
          >Star on GitHub</a>
          { count ? (
            <a
              className={ styles.stargazers }
              style={{ color: getColor('shade7') }}
              href="https://github.com/mjswensen/themer/stargazers"
              target="_blank"
              rel="noopener noreferrer"
            >{ count }</a>
          ) : null }
        </span>
      ) }
    </ColorState>
  );
}
