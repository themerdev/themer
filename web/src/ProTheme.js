import { useContext, useState } from 'react';
import { has } from 'lodash';
import { render } from '@themerdev/preview-swatch';
import Button from './Button';
import Link from './Link';
import ThemeContext, { paramsFromState } from './ThemeContext';
import styles from './ProTheme.module.css';
import PriceContext from './PriceContext';
import ButtonLink from './ButtonLink';

const Price = ({ price }) => {
  const { selectedCurrency } = useContext(PriceContext);
  switch (price.type) {
    case 'fixed':
      return `${selectedCurrency.symbol}${selectedCurrency.toDisplay(
        price.value,
      )}`;
    case 'pay-what-you-want':
    default:
      return `pay what you want`;
    // TODO: implement min price display
  }
};

const ProTheme = ({ theme }) => {
  const {
    activeColorSet,
    getActiveColorOrFallback,
    inactiveColorSet,
    setActiveColorSet,
  } = useContext(ThemeContext);
  const [darkSvgData, setDarkSvgData] = useState(null);
  const [lightSvgData, setLightSvgData] = useState(null);
  const files = render(theme.preparedColors, {
    'themer-preview-swatch-name': 'preview',
  });
  files.forEach((promisedFile) =>
    promisedFile.then(({ name, contents }) => {
      const svg = contents.toString('base64');
      if (name === 'preview-dark-swatch.svg') {
        setDarkSvgData(svg);
      }
      if (name === 'preview-light-swatch.svg') {
        setLightSvgData(svg);
      }
    }),
  );
  const svgData =
    activeColorSet === 'dark'
      ? darkSvgData || lightSvgData
      : lightSvgData || darkSvgData;
  const variantString =
    darkSvgData && lightSvgData
      ? 'light and dark'
      : darkSvgData
      ? 'dark only'
      : lightSvgData
      ? 'light only'
      : '';

  const linkToThisTheme = paramsFromState({
    colors: theme.colors,
    activeColorSet: has(theme.colors, activeColorSet)
      ? activeColorSet
      : inactiveColorSet,
    calculateIntermediaryShades: {
      dark: !has(theme.colors, 'dark.shade1'),
      light: !has(theme.colors, 'light.shade1'),
    },
  });
  return (
    <div
      className={styles.container}
      style={{
        borderColor: theme.isSelected
          ? getActiveColorOrFallback(['accent3'])
          : getActiveColorOrFallback(['shade3']),
      }}
    >
      <img
        className={styles.preview}
        alt={`Preview swatches for ${theme.name}`}
        src={`data:image/svg+xml;base64,${svgData}`}
      />
      <header className={styles.header}>
        <h3
          className={styles.title}
          style={{ color: getActiveColorOrFallback(['shade7']) }}
        >
          {theme.title}
        </h3>
        <div
          className={styles.description}
          style={{ color: getActiveColorOrFallback(['shade6']) }}
        >
          {theme.description}
        </div>
      </header>
      <div className={styles.rows}>
        <div
          className={styles.row}
          style={{ borderTopColor: getActiveColorOrFallback(['shade2']) }}
        >
          <span style={{ color: getActiveColorOrFallback(['shade5']) }}>
            Variants
          </span>
          <span
            className={styles.variant}
            style={{ color: getActiveColorOrFallback(['shade6']) }}
          >
            {variantString}
            {darkSvgData && lightSvgData && theme.isSelected ? (
              <Button
                className={styles.switchPreview}
                small
                onClick={() => setActiveColorSet(inactiveColorSet)}
              >
                Preview {inactiveColorSet}
              </Button>
            ) : null}
          </span>
        </div>
        <div
          className={styles.row}
          style={{ borderTopColor: getActiveColorOrFallback(['shade2']) }}
        >
          <span style={{ color: getActiveColorOrFallback(['shade5']) }}>
            Author
          </span>
          <Link href={theme.author.url} target='_blank' rel='noreferrer'>
            {theme.author.name}
          </Link>
        </div>
        <div
          className={styles.row}
          style={{ borderTopColor: getActiveColorOrFallback(['shade2']) }}
        >
          <span style={{ color: getActiveColorOrFallback(['shade5']) }}>
            Price
          </span>
          <div style={{ color: getActiveColorOrFallback(['shade7']) }}>
            <Price price={theme.price} />
          </div>
        </div>
      </div>
      {theme.isSelected ? (
        <Button secondary disabled>
          Selected
        </Button>
      ) : (
        <ButtonLink secondary href={linkToThisTheme}>
          Select
        </ButtonLink>
      )}
    </div>
  );
};

export default ProTheme;
