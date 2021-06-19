import { createContext, useState, useEffect } from 'react';
import qs from 'qs';
import { get, merge, mapValues, pick } from 'lodash';
import Color from 'color';
import colorSteps from 'color-steps';

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

export const ThemeProvider = ({ history, children }) => {
  const [rawState, setRawState] = useState(
    stateFromParams(history.location.search),
  );
  useEffect(() => {
    return history.listen(({ location }) => {
      setRawState(stateFromParams(location.search));
    });
  });

  const mergeState = (newState) =>
    history.replace(paramsFromState(merge({}, rawState, newState)));

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

  return (
    <ThemeContext.Provider
      value={{
        activeColorSet,
        setActiveColorSet,

        activeCalculateIntermediaryShades,
        setActiveCalculateIntermediaryShades,

        getActiveRawColor,
        getActiveColorOrFallback,
        preparedColorSet,
        activePreparedColorSet,
        cliColorSet,
        setActiveRawColor,

        getActiveContrastFromBackground,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
