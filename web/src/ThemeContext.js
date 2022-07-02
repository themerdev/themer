import { createContext, useEffect, useState } from 'react';
import qs from 'qs';
import { get, has, merge, mapValues, pick } from 'lodash';
import Color from 'color';
import colorSteps from 'color-steps';

import themes from './pro-themes.json';
import useHistory from './useHistory';
import { colors as defaultColors } from '@themerdev/colors-default';
import { colors as draculaColors } from '@themerdev/colors-dracula';
import { colors as fingerPaintColors } from '@themerdev/colors-finger-paint';
import { colors as githubUniverseColors } from '@themerdev/colors-github-universe';
import { colors as greenAsAWhistleColors } from '@themerdev/colors-green-as-a-whistle';
import { colors as lucidColors } from '@themerdev/colors-lucid';
import { colors as mojaveColors } from '@themerdev/colors-mojave';
import { colors as monkeyColors } from '@themerdev/colors-monkey';
import { colors as nightSkyColors } from '@themerdev/colors-night-sky';
import { colors as novaColors } from '@themerdev/colors-nova';
import { colors as oneColors } from '@themerdev/colors-one';
import { colors as polarIceColors } from '@themerdev/colors-polar-ice';
import { colors as rightInTheTealsColors } from '@themerdev/colors-right-in-the-teals';
import { colors as rivetColors } from '@themerdev/colors-rivet';
import { colors as setiColors } from '@themerdev/colors-seti';
import { colors as solarizedColors } from '@themerdev/colors-solarized';

const key = (theme) => {
  const colorSetKeys = ['dark', 'light'];
  const valueKeys = [
    'shade0',
    'shade1',
    'shade2',
    'shade3',
    'shade4',
    'shade5',
    'shade6',
    'shade7',
  ];
  const values = [];
  for (const colorSetKey of colorSetKeys) {
    for (const valueKey of valueKeys) {
      values.push(get(theme, [colorSetKey, valueKey], '').toLowerCase());
    }
  }
  return values.join('::');
};

const isEqual = (themeA, themeB) => key(themeA) === key(themeB);

const getProThemeColors = (theme) => {
  if (theme.slug) {
    switch (theme.slug) {
      case 'future-pro':
        return JSON.parse(atob(process.env.REACT_APP_FUTURE_PRO_COLORS));
      case 'victor-mono':
        return JSON.parse(atob(process.env.REACT_APP_VICTOR_MONO_COLORS));
      default:
        return defaultColors;
    }
  } else {
    switch (theme.package) {
      case '@themerdev/colors-dracula':
        return draculaColors;
      case '@themerdev/colors-finger-paint':
        return fingerPaintColors;
      case '@themerdev/colors-github-universe':
        return githubUniverseColors;
      case '@themerdev/colors-green-as-a-whistle':
        return greenAsAWhistleColors;
      case '@themerdev/colors-lucid':
        return lucidColors;
      case '@themerdev/colors-mojave':
        return mojaveColors;
      case '@themerdev/colors-monkey':
        return monkeyColors;
      case '@themerdev/colors-night-sky':
        return nightSkyColors;
      case '@themerdev/colors-nova':
        return novaColors;
      case '@themerdev/colors-one':
        return oneColors;
      case '@themerdev/colors-polar-ice':
        return polarIceColors;
      case '@themerdev/colors-right-in-the-teals':
        return rightInTheTealsColors;
      case '@themerdev/colors-rivet':
        return rivetColors;
      case '@themerdev/colors-seti':
        return setiColors;
      case '@themerdev/colors-solarized':
        return solarizedColors;
      case '@themerdev/colors-default':
      default:
        return defaultColors;
    }
  }
};

const stateFromParams = (search) =>
  qs.parse(search, { allowDots: true, ignoreQueryPrefix: true });

export const paramsFromState = (state) =>
  qs.stringify(state, { allowDots: true, addQueryPrefix: true });

const DEFAULT_STATE = {
  colors: {
    dark: {
      shade0: '#000000',
      shade7: '#FFFFFF',
    },
    light: {
      shade0: '#FFFFFF',
      shade7: '#000000',
    },
  },
  activeColorSet: 'dark',
  calculateIntermediaryShades: {
    dark: true,
    light: true,
  },
};

const stringToBooleanOrDefault = (value, defaultValue) => {
  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return defaultValue;
  }
};

const ThemeContext = createContext();

export const UrlThemeProvider = ({ children }) => {
  const { search, push, replace } = useHistory();
  const rawState = stateFromParams(search);

  const mergeState = (newState) =>
    replace(paramsFromState(merge({}, rawState, newState)));

  const pushState = (newState) => push(paramsFromState(newState));

  const replaceState = (newState) => replace('/' + paramsFromState(newState));

  const activeColorSet = ['dark', 'light'].includes(rawState.activeColorSet)
    ? rawState.activeColorSet
    : DEFAULT_STATE.activeColorSet;

  const setActiveColorSet = (value) =>
    mergeState({
      activeColorSet: value,
    });

  const calculateIntermediaryDarkShades = stringToBooleanOrDefault(
    get(rawState, 'calculateIntermediaryShades.dark'),
    DEFAULT_STATE.calculateIntermediaryShades.dark,
  );

  const calculateIntermediaryLightShades = stringToBooleanOrDefault(
    get(rawState, 'calculateIntermediaryShades.light'),
    DEFAULT_STATE.calculateIntermediaryShades.light,
  );

  const activeCalculateIntermediaryShades =
    activeColorSet === 'dark'
      ? calculateIntermediaryDarkShades
      : calculateIntermediaryLightShades;

  const setActiveCalculateIntermediaryShades = (value) =>
    mergeState({
      calculateIntermediaryShades: {
        [activeColorSet]: value,
      },
    });

  const parseSafe = (v) => {
    try {
      if (v === undefined) return;
      return Color(v).hex();
    } catch {}
  };

  const darkShade0 = parseSafe(get(rawState, 'colors.dark.shade0'));
  const darkShade7 = parseSafe(get(rawState, 'colors.dark.shade7'));
  const lightShade0 = parseSafe(get(rawState, 'colors.light.shade0'));
  const lightShade7 = parseSafe(get(rawState, 'colors.light.shade7'));

  const preparedColors = {
    dark: {
      shade0: darkShade0,
      ...(calculateIntermediaryDarkShades && darkShade0 && darkShade7
        ? colorSteps(darkShade0, darkShade7).reduce(
            (shades, color, idx) => ({
              ...shades,
              [`shade${idx + 1}`]: Color(color).hex(),
            }),
            {},
          )
        : {
            shade1: parseSafe(get(rawState, 'colors.dark.shade1')),
            shade2: parseSafe(get(rawState, 'colors.dark.shade2')),
            shade3: parseSafe(get(rawState, 'colors.dark.shade3')),
            shade4: parseSafe(get(rawState, 'colors.dark.shade4')),
            shade5: parseSafe(get(rawState, 'colors.dark.shade5')),
            shade6: parseSafe(get(rawState, 'colors.dark.shade6')),
          }),
      shade7: darkShade7,
      accent0: parseSafe(get(rawState, 'colors.dark.accent0')),
      accent1: parseSafe(get(rawState, 'colors.dark.accent1')),
      accent2: parseSafe(get(rawState, 'colors.dark.accent2')),
      accent3: parseSafe(get(rawState, 'colors.dark.accent3')),
      accent4: parseSafe(get(rawState, 'colors.dark.accent4')),
      accent5: parseSafe(get(rawState, 'colors.dark.accent5')),
      accent6: parseSafe(get(rawState, 'colors.dark.accent6')),
      accent7: parseSafe(get(rawState, 'colors.dark.accent7')),
    },
    light: {
      shade0: lightShade0,
      ...(calculateIntermediaryLightShades && lightShade0 && lightShade7
        ? colorSteps(lightShade0, lightShade7).reduce(
            (shades, color, idx) => ({
              ...shades,
              [`shade${idx + 1}`]: color,
            }),
            {},
          )
        : {
            shade1: parseSafe(get(rawState, 'colors.light.shade1')),
            shade2: parseSafe(get(rawState, 'colors.light.shade2')),
            shade3: parseSafe(get(rawState, 'colors.light.shade3')),
            shade4: parseSafe(get(rawState, 'colors.light.shade4')),
            shade5: parseSafe(get(rawState, 'colors.light.shade5')),
            shade6: parseSafe(get(rawState, 'colors.light.shade6')),
          }),
      shade7: lightShade7,
      accent0: parseSafe(get(rawState, 'colors.light.accent0')),
      accent1: parseSafe(get(rawState, 'colors.light.accent1')),
      accent2: parseSafe(get(rawState, 'colors.light.accent2')),
      accent3: parseSafe(get(rawState, 'colors.light.accent3')),
      accent4: parseSafe(get(rawState, 'colors.light.accent4')),
      accent5: parseSafe(get(rawState, 'colors.light.accent5')),
      accent6: parseSafe(get(rawState, 'colors.light.accent6')),
      accent7: parseSafe(get(rawState, 'colors.light.accent7')),
    },
  };

  const getPreparedColor = (variant, keys, fallbackKey) => {
    for (const key of keys) {
      const preparedColor = get(preparedColors, [variant, key]);
      if (preparedColor !== undefined) {
        return preparedColor;
      }
    }
    const preparedFallback = get(preparedColors, [variant, fallbackKey]);
    if (preparedFallback !== undefined) {
      return preparedFallback;
    } else {
      return get(DEFAULT_STATE, ['colors', variant, fallbackKey]);
    }
  };

  const getColorOrFallback = (variant, keys, background = false) =>
    getPreparedColor(variant, keys, background ? 'shade0' : 'shade7');
  const getActiveColorOrFallback = (keys, background) =>
    getColorOrFallback(activeColorSet, keys, background);

  const getActiveContrastFromBackground = (key) => {
    const color = Color(getActiveColorOrFallback([key]));
    const bg = Color(getActiveColorOrFallback(['shade0'], true));
    return color.contrast(bg);
  };

  const preparedFullColorSet = {
    dark: {
      shade0: getColorOrFallback('dark', ['shade0'], true),
      shade1: getColorOrFallback('dark', ['shade1']),
      shade2: getColorOrFallback('dark', ['shade2']),
      shade3: getColorOrFallback('dark', ['shade3']),
      shade4: getColorOrFallback('dark', ['shade4']),
      shade5: getColorOrFallback('dark', ['shade5']),
      shade6: getColorOrFallback('dark', ['shade6']),
      shade7: getColorOrFallback('dark', ['shade7']),
      accent0: getColorOrFallback('dark', ['accent0']),
      accent1: getColorOrFallback('dark', ['accent1']),
      accent2: getColorOrFallback('dark', ['accent2']),
      accent3: getColorOrFallback('dark', ['accent3']),
      accent4: getColorOrFallback('dark', ['accent4']),
      accent5: getColorOrFallback('dark', ['accent5']),
      accent6: getColorOrFallback('dark', ['accent6']),
      accent7: getColorOrFallback('dark', ['accent7']),
    },
    light: {
      shade0: getColorOrFallback('light', ['shade0'], true),
      shade1: getColorOrFallback('light', ['shade1']),
      shade2: getColorOrFallback('light', ['shade2']),
      shade3: getColorOrFallback('light', ['shade3']),
      shade4: getColorOrFallback('light', ['shade4']),
      shade5: getColorOrFallback('light', ['shade5']),
      shade6: getColorOrFallback('light', ['shade6']),
      shade7: getColorOrFallback('light', ['shade7']),
      accent0: getColorOrFallback('light', ['accent0']),
      accent1: getColorOrFallback('light', ['accent1']),
      accent2: getColorOrFallback('light', ['accent2']),
      accent3: getColorOrFallback('light', ['accent3']),
      accent4: getColorOrFallback('light', ['accent4']),
      accent5: getColorOrFallback('light', ['accent5']),
      accent6: getColorOrFallback('light', ['accent6']),
      accent7: getColorOrFallback('light', ['accent7']),
    },
  };

  const activePreparedColorSet = preparedFullColorSet[activeColorSet];

  const colorKeys = [
    'shade0',
    'shade1',
    'shade2',
    'shade3',
    'shade4',
    'shade5',
    'shade6',
    'shade7',
    'accent0',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
    'accent5',
    'accent6',
    'accent7',
  ];
  const preparedColorSet = {
    ...(colorKeys.some((key) => !!get(rawState, ['colors', 'dark', key]))
      ? { dark: preparedFullColorSet.dark }
      : null),
    ...(colorKeys.some((key) => !!get(rawState, ['colors', 'light', key]))
      ? { light: preparedFullColorSet.light }
      : null),
  };

  const cliColorSet = mapValues(preparedColorSet, (colors, variant) => {
    if (
      (variant === 'dark' && calculateIntermediaryDarkShades) ||
      (variant === 'light' && calculateIntermediaryLightShades)
    ) {
      return pick(colors, [
        'shade0',
        'shade7',
        'accent0',
        'accent1',
        'accent2',
        'accent3',
        'accent4',
        'accent5',
        'accent6',
        'accent7',
      ]);
    } else {
      return colors;
    }
  });

  const getActiveRawColor = (key) =>
    get(rawState, ['colors', activeColorSet, key], '');

  const setActiveRawColor = (key, value) =>
    mergeState({
      colors: {
        [activeColorSet]: {
          [key]: value,
        },
      },
    });

  const inactiveColorSet = activeColorSet === 'dark' ? 'light' : 'dark';

  const proThemes = themes.map(({ title, themes }) => ({
    title,
    themes: themes.map((theme) => {
      const cliColors = getProThemeColors(theme);
      const preparedColors = Object.fromEntries(
        [...Object.entries(cliColors)].map(([key, colors]) => [
          key,
          {
            shade0: colors.shade0,
            ...(colors.shade1
              ? {
                  shade1: colors.shade1,
                  shade2: colors.shade2,
                  shade3: colors.shade3,
                  shade4: colors.shade4,
                  shade5: colors.shade5,
                  shade6: colors.shade6,
                }
              : colorSteps(colors.shade0, colors.shade7).reduce(
                  (shades, color, idx) => ({
                    ...shades,
                    [`shade${idx + 1}`]: Color(color).hex(),
                  }),
                  {},
                )),
            shade7: colors.shade7,
            accent0: colors.accent0,
            accent1: colors.accent1,
            accent2: colors.accent2,
            accent3: colors.accent3,
            accent4: colors.accent4,
            accent5: colors.accent5,
            accent6: colors.accent6,
            accent7: colors.accent7,
          },
        ]),
      );
      return {
        ...theme,
        colors: cliColors,
        preparedColors,
        isSelected: isEqual(cliColorSet, cliColors),
        isFeatured: title === 'Featured',
        state: {
          colors: cliColors,
          activeColorSet: has(cliColors, activeColorSet)
            ? activeColorSet
            : inactiveColorSet,
          calculateIntermediaryShades: {
            dark: !has(cliColors, 'dark.shade1'),
            light: !has(cliColors, 'light.shade1'),
          },
        },
      };
    }),
  }));

  const selectedProTheme = proThemes
    .reduce((acc, { themes }) => [...acc, ...themes], [])
    .find(({ isSelected }) => isSelected);

  return (
    <ThemeContext.Provider
      value={{
        activeColorSet,
        setActiveColorSet,
        inactiveColorSet,

        activeCalculateIntermediaryShades,
        setActiveCalculateIntermediaryShades,

        getActiveRawColor,
        getActiveColorOrFallback,
        preparedColorSet,
        activePreparedColorSet,
        cliColorSet,
        setActiveRawColor,

        getActiveContrastFromBackground,

        proThemes,
        selectedProTheme,
        pushState,
        replaceState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const AdminThemeProvider = ({ children }) => {
  const theme = getProThemeColors({
    package: '@themerdev/colors-default',
  });
  const getActiveColorOrFallback = (keys) =>
    get(theme[activeColorSet], [keys[0]]);

  const query = window.matchMedia('(prefers-color-scheme: light)');
  const [activeColorSet, setActiveColorSet] = useState(
    query.matches ? 'light' : 'dark',
  );
  const inactiveColorSet = activeColorSet === 'light' ? 'dark' : 'light';
  useEffect(() => {
    const listener = (evt) => {
      setActiveColorSet(evt.matches ? 'light' : 'dark');
    };
    query.addEventListener('change', listener);
    return () => {
      query.removeEventListener('change', listener);
    };
  });

  const backgroundColor = getActiveColorOrFallback(['shade0']);
  const foregroundColor = getActiveColorOrFallback(['shade7']);
  useEffect(() => {
    window.document.body.style.backgroundColor = backgroundColor;
    window.document.body.style.color = foregroundColor;
    return () => {
      window.document.body.style.backgroundColor = null;
      window.document.body.style.color = null;
    };
  }, [backgroundColor, foregroundColor]);

  return (
    <ThemeContext.Provider
      value={{
        activeColorSet,
        inactiveColorSet,
        getActiveColorOrFallback,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
