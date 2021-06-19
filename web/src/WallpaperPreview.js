import { useState, useRef, useContext } from 'react';
import Tabs from './Tabs';
import WallpaperModal from './WallpaperModal';
import Button from './Button';
import styles from './WallpaperPreview.module.css';
import ThemeContext from './ThemeContext';

const WallpaperPreview = () => {
  const [activePreview, setActivePreview] = useState(null);

  const wallpaperOptions = new Map([
    [
      'themer-wallpaper-block-wave',
      { label: '"Block Wave"', buttonRef: useRef(null) },
    ],
    ['themer-wallpaper-burst', { label: '"Burst"', buttonRef: useRef(null) }],
    [
      'themer-wallpaper-circuits',
      { label: '"Circuits"', buttonRef: useRef(null) },
    ],
    [
      'themer-wallpaper-diamonds',
      { label: '"Diamonds"', buttonRef: useRef(null) },
    ],
    [
      'themer-wallpaper-dot-grid',
      { label: '"Dot Grid"', buttonRef: useRef(null) },
    ],
    [
      'themer-wallpaper-octagon',
      { label: '"Octagon"', buttonRef: useRef(null) },
    ],
    [
      'themer-wallpaper-triangles',
      { label: '"Triangles"', buttonRef: useRef(null) },
    ],
    [
      'themer-wallpaper-trianglify',
      { label: '"Tranglify"', buttonRef: useRef(null) },
    ],
    ['themer-wallpaper-shirts', { label: '"Shirts"', buttonRef: useRef(null) }],
  ]);

  const onModalClose = () => {
    const button = wallpaperOptions.get(activePreview).buttonRef;
    if (button.current) {
      button.current.focus();
    }
    setActivePreview(null);
  };

  const { activeColorSet, activePreparedColorSet } = useContext(ThemeContext);

  return (
    <Tabs>
      {({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
        <div>
          <span className={tabClassName} style={getTabStyle(true)}>
            Wallpaper
          </span>
          <div className={contentClassName} style={contentStyle}>
            <div className={styles.buttons}>
              {Array.from(wallpaperOptions.entries()).map(
                ([value, { label, buttonRef }]) => (
                  <Button
                    key={value}
                    onClick={() => {
                      setActivePreview(value);
                      window.__ssa__log('preview wallpaper', {
                        wallpaper: value,
                      });
                    }}
                    ref={buttonRef}
                  >
                    Preview {label}
                  </Button>
                ),
              )}
            </div>
            {activePreview ? (
              <WallpaperModal
                wallpaper={activePreview}
                colors={{
                  [activeColorSet]: activePreparedColorSet,
                }}
                onClose={() => {
                  onModalClose();
                  window.__ssa__log('close wallpaper modal');
                }}
              />
            ) : null}
          </div>
        </div>
      )}
    </Tabs>
  );
};

export default WallpaperPreview;
