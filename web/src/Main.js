import { useState, useEffect, useContext } from 'react';
import styles from './Main.module.css';
import { version } from '../package.json';

import ColorSetSelector from './ColorSetSelector';
import TextPreviews from './TextPreviews';
import WallpaperPreview from './WallpaperPreview';
import Download from './Download';
import Link from './Link';
import CopyUrl from './CopyUrl';
import StarCount from './StarCount';
import ThemeContext from './ThemeContext';
import Notification from './Notification';
import TwitterHandle from './TwitterHandle';

const Main = () => {
  const [keyboarding, setKeyboarding] = useState(false);
  const onKeyDown = (evt) => {
    if (evt.key === 'Tab') {
      setKeyboarding(true);
    }
  };
  const onMouseDown = () => {
    setKeyboarding(false);
  };
  useEffect(() => {
    window.document.addEventListener('keydown', onKeyDown);
    return () => {
      window.document.removeEventListener('keydown', onKeyDown);
    };
  });
  useEffect(() => {
    window.document.addEventListener('mousedown', onMouseDown);
    return () => {
      window.document.removeEventListener('mousedown', onMouseDown);
    };
  });
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const backgroundColor = getActiveColorOrFallback(['shade0'], true);
  useEffect(() => {
    window.document.body.style.backgroundColor = backgroundColor;
    return () => (window.document.body.style.backgroundColor = null);
  }, [backgroundColor]);
  return (
    <div
      className={`${styles.app} ${keyboarding ? styles.keyboarding : ''}`}
      style={{
        backgroundColor,
        '--selection-foreground-color': backgroundColor,
        '--selection-background-color': getActiveColorOrFallback(['accent5']),
        '--focus-outline-color': getActiveColorOrFallback(['accent6']),
      }}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.h1}>
            <a href='/' style={{ color: getActiveColorOrFallback(['shade7']) }}>
              themer
            </a>
          </h1>
          <span>
            <TwitterHandle />
            <StarCount />
          </span>
        </header>
        <hr
          className={styles.hr}
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                ${getActiveColorOrFallback(['accent0', 'shade2'])},
                ${getActiveColorOrFallback(['accent1', 'shade2'])},
                ${getActiveColorOrFallback(['accent2', 'shade2'])},
                ${getActiveColorOrFallback(['accent3', 'shade2'])},
                ${getActiveColorOrFallback(['accent4', 'shade2'])},
                ${getActiveColorOrFallback(['accent4', 'shade2'])},
                ${getActiveColorOrFallback(['accent5', 'shade2'])},
                ${getActiveColorOrFallback(['accent6', 'shade2'])},
                ${getActiveColorOrFallback(['accent7', 'shade2'])}
              )
            `,
          }}
        />
        <p style={{ color: getActiveColorOrFallback(['shade6']) }}>
          themer takes a set of colors and generates themes for your development
          environment (editors, terminals, wallpapers, and more).
        </p>
        <h2
          className={styles.h2}
          style={{ color: getActiveColorOrFallback(['shade7']) }}
        >
          1. Pick your colors
        </h2>
        <ColorSetSelector />
        <h2
          className={styles.h2}
          style={{ color: getActiveColorOrFallback(['shade7']) }}
        >
          2. Preview
        </h2>
        <div className={styles.previewsContainer}>
          <TextPreviews />
          <WallpaperPreview />
        </div>
        <h2
          className={styles.h2}
          style={{ color: getActiveColorOrFallback(['shade7']) }}
        >
          3. Download
        </h2>
        <p
          className={styles.help}
          style={{ color: getActiveColorOrFallback(['shade6']) }}
        >
          Select which themes you'd like to generate from your colors.
          Installation instructions will be included in a README file.
        </p>
        <Download />
      </div>
      <div
        className={styles.shape}
        style={{ '--shape-color': getActiveColorOrFallback(['shade1'], true) }}
      >
        <div className={styles.container}>
          <p style={{ color: getActiveColorOrFallback(['shade7']) }}>
            <span style={{ color: getActiveColorOrFallback(['accent1']) }}>
              Pro tip:
            </span>{' '}
            The current URL uniquely identifies your current theme. Bookmark it,
            email it, or share it however you like.{' '}
            <CopyUrl className={styles.copyUrl} />
          </p>
        </div>
      </div>
      <footer
        className={styles.footer}
        style={{ color: getActiveColorOrFallback(['shade3']) }}
      >
        <div>
          themer is open source software, made by{' '}
          <Link href='https://mjswensen.com'>mjswensen</Link> with{' '}
          <Link href='https://github.com/themerdev/themer/graphs/contributors'>
            contributors
          </Link>
          , and is released under the MIT license &bull; v{version}
        </div>
        <div className={styles.follow}>
          follow <Link href='https://twitter.com/themerdev'>@themerdev</Link> on
          Twitter for new themes, wallpapers, and features as soon as they
          launch
        </div>
        <div className={styles.support}>
          enjoying themer? show your support by purchasing a theme, sponsoring
          the{' '}
          <Link href='https://github.com/sponsors/themerdev'>
            @themerdev GitHub org
          </Link>
          , sending a tip through <Link href='https://brave.com'>Brave</Link>,
          or starring the{' '}
          <Link href='https://github.com/themerdev/themer'>
            GitHub repository
          </Link>
        </div>
        <nav className={styles.nav}>
          <span>
            Interested in selling your theme on themer.dev? Log in to the
          </span>{' '}
          <Link
            href='/dashboard'
            onClick={() => window.__ssa__log('click author dashboard link')}
          >
            author dashboard
          </Link>{' '}
          and join the waitlist
        </nav>
      </footer>
      <Notification />
    </div>
  );
};

export default Main;
