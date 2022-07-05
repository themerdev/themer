import { useContext, useMemo } from 'react';
import ThemeContext from './ThemeContext';
import Color from 'color';

function hash(str, min, max) {
  const range = max - min;
  const value =
    [...str].map((char) => char.charCodeAt(0)).reduce((a, b) => a + b) % range;
  return min + value;
}

const renderImage = ({
  shade0,
  shade1,
  shade2,
  shade3,
  shade4,
  shade5,
  shade6,
  shade7,
  accent0,
  accent1,
  accent2,
  accent3,
  accent4,
  accent5,
  accent6,
  accent7,
}) => {
  const swatches = [
    Color(accent0).mix(Color(shade0), 0.3).hex(),
    accent0,
    accent1,
    accent2,
    Color(accent2).mix(Color(shade7), 0.15).hex(),
    Color(accent2).mix(Color(shade0)).hex(),
    shade4,
    Color(shade4).mix(Color(shade5)).hex(),
    shade5,
    accent7,
    Color(accent7).mix(Color(shade0), 0.7).hex(),
    shade3,
    shade2,
    Color(accent6).mix(Color(shade2)).hex(),
    accent6,
    accent5,
    Color(accent5).mix(Color(shade5)).hex(),
    Color(accent5).mix(Color(shade0)).hex(),
    shade6,
    shade7,
    accent3,
    Color(accent3).mix(Color(accent4)).hex(),
    accent4,
    shade1,
  ];
  const [width, height] = [1920, 1080];
  const [swatchWidth, swatchHeight] = [150, 500];
  const rotationOffset = 40;
  const [centerX, centerY] = [width / 2, height / 2];
  return `
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 ${width} ${height}'>
      <rect x="0" y="0" width="${width}" height="${height}" fill="${shade0}" />
      ${swatches.map(
        (swatch, i, arr) =>
          `<rect
            x="${centerX - rotationOffset}"
            y="${centerY - rotationOffset}"
            width="${swatchWidth}"
            height="${swatchHeight}"
            rx="20"
            fill="${swatch}"
            transform="rotate(
              ${(((i + 1) * (360 / arr.length)) % 360) + hash(swatch, -2, 5)},
              ${centerX},
              ${centerY}
            )"
            stroke="rgba(0,0,0,0.05)"
            stroke-width="3"
          />`,
      )}
      <circle cx="${centerX}" cy="${centerY}" r="9" fill="${shade0}" opacity="0.5" />
    </svg>
  `;
};

const ProThemeHero = ({ theme, className }) => {
  const { activeColorSet } = useContext(ThemeContext);
  const svgData = useMemo(
    () =>
      Buffer.from(
        renderImage(theme.preparedColors[activeColorSet]),
        'utf-8',
      ).toString('base64'),
    [theme, activeColorSet],
  );
  return (
    <img
      className={className}
      alt={`Preview for ${theme.title}`}
      src={`data:image/svg+xml;base64,${svgData}`}
    />
  );
};

export default ProThemeHero;
