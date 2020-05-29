import React, { useState, useRef, useContext } from 'react';
import Tabs from './Tabs';
import WallpaperModal from './WallpaperModal';
import Button from './Button';
import styles from './WallpaperPreview.module.css';
import ThemeContext from './ThemeContext';

const wallpaperOptions = [
  { value: 'themer-wallpaper-block-wave', label: '"Block Wave"'},
  { value: 'themer-wallpaper-burst', label: '"Burst"'},
  { value: 'themer-wallpaper-diamonds', label: '"Diamonds"'},
  { value: 'themer-wallpaper-octagon', label: '"Octagon"'},
  { value: 'themer-wallpaper-triangles', label: '"Triangles"'},
  { value: 'themer-wallpaper-trianglify', label: '"Tranglify"'},
  { value: 'themer-wallpaper-shirts', label: '"Shirts"'},
];

export default () => {
  const [activePreview, setActivePreview] = useState(null);

  const buttonRefs = new Map(wallpaperOptions.map(option => [option.value, useRef(null)]));

  const onModalClose = () => {
    const button = buttonRefs.get(activePreview);
    if (button.current) {
      button.current.focus();
    }
    setActivePreview(null);
  }

  const { activePreparedColorSet } = useContext(ThemeContext);

  return (
    <Tabs>
      { ({ tabClassName, getTabStyle, contentClassName, contentStyle }) => (
        <div>
          <span
            className={ tabClassName }
            style={ getTabStyle(true) }
          >Wallpaper</span>
          <div className={ contentClassName } style={ contentStyle }>
            <div className={ styles.buttons }>
              { wallpaperOptions.map(option => (
                <Button
                  key={ option.value }
                  onClick={ () => setActivePreview(option.value) }
                  ref={ buttonRefs.get(option.value) }
                >Preview { option.label }</Button>
              )) }
            </div>
            { activePreview ? (
              <WallpaperModal
                wallpaper={ activePreview }
                colors={{
                  current: activePreparedColorSet
                }}
                onClose={ onModalClose }
              />
            ) : null }
          </div>
        </div>
      ) }
    </Tabs>
  );
}
