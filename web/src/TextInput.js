import { useContext } from 'react';
import classNames from 'classnames';
import ThemeContext from './ThemeContext';
import styles from './TextInput.module.css';

const TextInput = (props) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <input
      {...props}
      className={classNames(styles.input, props.className)}
      style={{
        'color': getActiveColorOrFallback(['shade6']),
        '--input-placeholder-color': getActiveColorOrFallback(['shade5']),
      }}
    />
  );
};

export default TextInput;
