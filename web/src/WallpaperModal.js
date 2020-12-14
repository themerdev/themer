import React, { useState, useEffect, useRef, useContext } from 'react';
import Button from './Button';
import Radio from './Radio';
import styles from './WallpaperModal.module.css';
import ThemeContext from './ThemeContext';
import useEscListener from './useEscListener';

import { render as blockWaveRender } from '@themer/wallpaper-block-wave';
import { render as burstRender } from '@themer/wallpaper-burst';
import { render as circuitsRender } from '@themer/wallpaper-circuits';
import { render as diamondsRender } from '@themer/wallpaper-diamonds';
import { render as dotGridRender } from '@themer/wallpaper-dot-grid';
import { render as octagonRender } from '@themer/wallpaper-octagon';
import { render as shirtsRender } from '@themer/wallpaper-shirts';
import { render as trianglesRender } from '@themer/wallpaper-triangles';
import { render as trianglifyRender } from '@themer/wallpaper-trianglify';

const getImagePromises = (wallpaper, colors, width, height) => {
  const options = { [`${wallpaper}-size`]: `${width}x${height}` };
  switch (wallpaper) {
    case 'themer-wallpaper-block-wave':
      return blockWaveRender(colors, options);
    case 'themer-wallpaper-burst':
      return burstRender(colors, options);
    case 'themer-wallpaper-circuits':
      return circuitsRender(colors, options);
    case 'themer-wallpaper-diamonds':
      return diamondsRender(colors, options);
    case 'themer-wallpaper-dot-grid':
      return dotGridRender(colors, options);
    case 'themer-wallpaper-octagon':
      return octagonRender(colors, options);
    case 'themer-wallpaper-shirts':
      return shirtsRender(colors, options);
    case 'themer-wallpaper-triangles':
      return trianglesRender(colors, options);
    case 'themer-wallpaper-trianglify':
      return trianglifyRender(colors, options);
    default:
      throw new Error(`${wallpaper} not found`);
  }
}

export default ({ onClose, wallpaper, colors }) => {
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('none');
  
  useEscListener(onClose);

  const { getActiveColorOrFallback } = useContext(ThemeContext);

  const node = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    (async () => {
      const { devicePixelRatio } = window;
      const { width, height } = node.current.getBoundingClientRect();
      setImages(
        await Promise.all(
          getImagePromises(
            wallpaper,
            colors,
            width * devicePixelRatio,
            height * devicePixelRatio,
          )
        ),
      );
    })();
  }, [node, wallpaper, colors]);

  useEffect(() => {
    button.current.focus();
  }, [button]);

  useEffect(() => {
    let url;
    if (images[imageIndex]) {
      url = URL.createObjectURL(new Blob([images[imageIndex].contents], { type: 'image/png' }));
      setBackgroundImage(`url("${url}")`);
    } else {
      setBackgroundImage('none');
    }
    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    }
  }, [images, imageIndex]);

  return (
    <div
      className={ styles.scrim }
      style={{ backgroundColor: getActiveColorOrFallback(['shade0'], true) }}
      ref={ node }
    >
      { backgroundImage ? (
        <div
          className={ styles.image }
          style={{ backgroundImage }}
        />
      ) : (
        <span style={{ color: getActiveColorOrFallback(['shade2']) }}>loading...</span>
      ) }
      <span className={ styles.options }>
        { images.length > 1
            ? (
                <span
                  className={ styles.variations }
                  style={{
                    backgroundColor: getActiveColorOrFallback(['shade2'], true),
                    borderColor: getActiveColorOrFallback(['shade4']),
                  }}
                >
                  { images.map((_, i) => (
                    <Radio
                      key={ `${wallpaper}-${i}` }
                      className={ styles.variation }
                      color={ getActiveColorOrFallback(['shade7']) }
                      onChange={ () => {
                        setImageIndex(i);
                        window.__ssa__log('change wallpaper preview image index', { index: i });
                      } }
                      value={ i === imageIndex }
                      label={ `Variation ${i + 1}` }
                    />
                  )) }
                </span>
              )
            : null
        }
        <Button
          onClick={ onClose }
          ref={ button }
        >Close</Button>
      </span>
    </div>
  );
}