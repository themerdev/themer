import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import Button from './Button';
import styles from './WallpaperModal.module.css';

import { render as blockWaveRender } from 'themer-wallpaper-block-wave';
import { render as octagonRender } from 'themer-wallpaper-octagon';
import { render as shirtsRender } from 'themer-wallpaper-shirts';
import { render as trianglesRender } from 'themer-wallpaper-triangles';
import { render as trianglifyRender } from 'themer-wallpaper-trianglify';

const getImagePromises = (pkg, colors, width, height) => {
  const options = { [`${pkg}-size`]: `${width}x${height}` };
  switch (pkg) {
    case 'themer-wallpaper-block-wave':
      return blockWaveRender(colors, options);
    case 'themer-wallpaper-octagon':
      return octagonRender(colors, options);
    case 'themer-wallpaper-shirts':
      return shirtsRender(colors, options);
    case 'themer-wallpaper-triangles':
      return trianglesRender(colors, options);
    case 'themer-wallpaper-trianglify':
      return trianglifyRender(colors, options);
    default:
      throw new Error(`${pkg} not found`);
  }
}

export default class WallpaperModal extends PureComponent {
  state = { image: null };
  escListener = evt => {
    if (evt.key === 'Escape') {
      this.props.onClose();
    }
  }
  async componentDidMount() {
    try {
      const { devicePixelRatio } = window;
      const { width, height } = this.node.getBoundingClientRect();
      const images = await Promise.all(
        getImagePromises(
          this.props.wallpaper,
          this.props.colors,
          width * devicePixelRatio,
          height * devicePixelRatio,
        )
      );
      this.setState({
        image: `url('data:image/svg+xml;utf8,${encodeURIComponent(images[0].contents.toString('utf8'))}')`
      });
    } catch {
      this.setState({ image: 'none' });
    }
    window.document.addEventListener('keydown', this.escListener);
    this.closeButton.focus();
  }
  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.escListener);
  }
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <div
            className={ styles.scrim }
            style={{ backgroundColor: getColor('shade0') }}
            ref={ n => this.node = n }
          >
            { this.state.image ? (
              <div
                className={ styles.image }
                style={{ backgroundImage: this.state.image }}
              />
            ) : (
              <span style={{ color: getColor('shade2', 'shade7') }}>loading...</span>
            ) }
            <Button
              className={ styles.close }
              onClick={ this.props.onClose }
              ref={ n => this.closeButton = n }
            >close</Button>
          </div>
        ) }
      </ColorState>
    );
  }
}
