import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import styles from './Loading.module.css';

const Loading = ({ isLoading, children }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const className = [styles.child, isLoading && styles.loading]
    .filter(Boolean)
    .join(' ');
  const style = {
    '--loading-background-color': getActiveColorOrFallback(['shade0']),
  };
  return children(className, style);
};

export default Loading;
