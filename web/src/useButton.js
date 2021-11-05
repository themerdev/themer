import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import styles from './useButton.module.css';

export default function useButton(className, options) {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const getColorKeys = () => {
    if (options.disabled) {
      return ['shade3'];
    } else if (options.small || options.special) {
      return ['shade7'];
    } else if (options.secondary) {
      return ['shade6'];
    } else {
      return ['accent4', 'shade6'];
    }
  };
  const fullClassName = [
    styles.button,
    options.small && styles.small,
    options.special && styles.special,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const styleProperty = {
    'color': getActiveColorOrFallback(getColorKeys()),
    '--button-resting-background-color': getActiveColorOrFallback(
      ['shade1'],
      true,
    ),
    '--button-hover-background-color': getActiveColorOrFallback(
      ['shade2'],
      true,
    ),
    '--button-active-background-color': getActiveColorOrFallback(
      ['shade0'],
      true,
    ),
    '--button-special-color-1': getActiveColorOrFallback(['accent1']),
    '--button-special-color-2': getActiveColorOrFallback(['accent7']),
  };
  return [fullClassName, styleProperty];
}
