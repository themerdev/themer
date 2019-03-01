import React, { useState, useRef } from 'react';
import Tabs from './Tabs';
import WallpaperModal from './WallpaperModal';
import Button from './Button';
import styles from './WallpaperPreview.module.css';
import ColorState from './ColorState';

const wallpaperOptions = [
  { value: 'themer-wallpaper-block-wave', label: '"Block Wave"'},
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
              <ColorState>
                { ({ getColor }) => (
                  <WallpaperModal
                    wallpaper={ activePreview }
                    colors={{
                      current: {
                        shade0: getColor('shade0'),
                        shade1: getColor('shade1'),
                        shade2: getColor('shade2'),
                        shade3: getColor('shade3'),
                        shade4: getColor('shade4'),
                        shade5: getColor('shade5'),
                        shade6: getColor('shade6'),
                        shade7: getColor('shade7'),
                        accent0: getColor('accent0'),
                        accent1: getColor('accent1'),
                        accent2: getColor('accent2'),
                        accent3: getColor('accent3'),
                        accent4: getColor('accent4'),
                        accent5: getColor('accent5'),
                        accent6: getColor('accent6'),
                        accent7: getColor('accent7'),
                      }
                    }}
                    onClose={ onModalClose }
                  />
                ) }
              </ColorState>
            ) : null }
          </div>
        </div>
      ) }
    </Tabs>
  );
}
