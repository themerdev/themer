import { useContext, useState } from 'react';
import { has } from 'lodash';
import { render } from '@themerdev/preview-swatch';
import Button from './Button';
import Link from './Link';
import Price from './Price';
import ThemeContext, { paramsFromState } from './ThemeContext';
import styles from './ProTheme.module.css';
import ButtonLink from './ButtonLink';
import featuredImages from './featured/images';

const ProTheme = ({ theme }) => {
  const {
    activeColorSet,
    getActiveColorOrFallback,
    inactiveColorSet,
    setActiveColorSet,
    pushState,
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
      ? 'light & dark'
      : darkSvgData
      ? 'dark only'
      : lightSvgData
      ? 'light only'
      : '';

  const themeState = {
    colors: theme.colors,
    activeColorSet: has(theme.colors, activeColorSet)
      ? activeColorSet
      : inactiveColorSet,
    calculateIntermediaryShades: {
      dark: !has(theme.colors, 'dark.shade1'),
      light: !has(theme.colors, 'light.shade1'),
    },
  };
  const linkToThisTheme = paramsFromState(themeState);
  const onSelectClick = (evt) => {
    evt.preventDefault();
    pushState(themeState);
    window.__ssa__log('pro theme select', {
      title: theme.title,
      featured: theme.isFeatured,
      priceType: theme.price.type,
    });
  };
  return (
    <div
      className={styles.container}
      style={{
        borderColor: theme.isSelected
          ? getActiveColorOrFallback(['accent3'])
          : getActiveColorOrFallback(['shade1'], true),
      }}
    >
      {theme.isFeatured ? (
        <img
          className={styles.hero}
          alt={`Preview for ${theme.title}`}
          src={featuredImages.get(theme.title)[activeColorSet]}
        />
      ) : (
        <img
          className={styles.preview}
          alt={`Preview swatches for ${theme.title}`}
          src={`data:image/svg+xml;base64,${svgData}`}
        />
      )}
      <div className={styles.content}>
        <header
          className={[styles.header, theme.isFeatured && styles.featured]
            .filter(Boolean)
            .join(' ')}
        >
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
              style={{ color: getActiveColorOrFallback(['shade7']) }}
            >
              {variantString}
              {theme.colors.dark && theme.colors.light && theme.isSelected ? (
                <Button
                  className={styles.switchPreview}
                  small
                  onClick={() => {
                    setActiveColorSet(inactiveColorSet);
                    window.__ssa__log('switch color set from pro theme');
                  }}
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
              {theme.price.type === 'fixed' ? (
                <Price amount={theme.price.value} />
              ) : (
                'pay what you want'
              )}
            </div>
          </div>
        </div>
        {theme.isFeatured ? (
          <div className={styles.featuredSelect}>
            {theme.isSelected ? (
              <Button special disabled>
                Selected
              </Button>
            ) : (
              <ButtonLink
                special
                href={linkToThisTheme}
                onClick={onSelectClick}
              >
                Select
              </ButtonLink>
            )}
          </div>
        ) : theme.isSelected ? (
          <Button secondary disabled>
            Selected
          </Button>
        ) : (
          <ButtonLink secondary href={linkToThisTheme} onClick={onSelectClick}>
            Select
          </ButtonLink>
        )}
      </div>
    </div>
  );
};

export default ProTheme;
