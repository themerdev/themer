import React, { useState, useEffect, useRef } from 'react';
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

export default ({ onClose, wallpaper, colors }) => {
  const [image, setImage] = useState(null);
  
  const escListener = evt => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.document.addEventListener('keydown', escListener);
    return () => {
      window.document.removeEventListener('keydown', escListener);
    };
  });

  const node = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { devicePixelRatio } = window;
        const { width, height } = node.current.getBoundingClientRect();
        const images = await Promise.all(
          getImagePromises(
            wallpaper,
            colors,
            width * devicePixelRatio,
            height * devicePixelRatio,
          )
        );
        setImage(
          `url('data:image/svg+xml;utf8,${encodeURIComponent(images[0].contents.toString('utf8'))}')`,
        );
      } catch {
        setImage('none');
      }
    })();
  }, [node, wallpaper, colors]);

  useEffect(() => {
    button.current.focus();
  }, [button]);
  
  return (
    <ColorState>
      { ({ getColor }) => (
        <div
          className={ styles.scrim }
          style={{ backgroundColor: getColor('shade0') }}
          ref={ node }
        >
          { image ? (
            <div
              className={ styles.image }
              style={{ backgroundImage: image }}
            />
          ) : (
            <span style={{ color: getColor('shade2', 'shade7') }}>loading...</span>
          ) }
          <Button
            className={ styles.close }
            onClick={ onClose }
            ref={ button }
          >close</Button>
        </div>
      ) }
    </ColorState>
  );
}