import React, { PureComponent } from 'react';
import Tabs from './Tabs';
import WallpaperModal from './WallpaperModal';
import Button from './Button';
import styles from './WallpaperPreview.module.css';
import ColorState from './ColorState';

const wallpaperOptions = [
  { value: 'themer-wallpaper-trianglify', label: '"Tranglify"'},
  { value: 'themer-wallpaper-block-wave', label: '"Block Wave"'},
  { value: 'themer-wallpaper-octagon', label: '"Octagon"'},
  { value: 'themer-wallpaper-shirts', label: '"Shirts"'},
  { value: 'themer-wallpaper-triangles', label: '"Triangles"'},
];

export default class WallpaperPreview extends PureComponent {
  
  state = { activePreview: null };
  
  render() {
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
                    onClick={ () => this.setState({ activePreview: option.value }) }
                  >Preview { option.label }</Button>
                )) }
              </div>
              { this.state.activePreview ? (
                <ColorState>
                  { ({ getColor }) => (
                    <WallpaperModal
                      wallpaper={ this.state.activePreview }
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
                      onClose={ () => this.setState({ activePreview: null }) }
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
}
