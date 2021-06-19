import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Link = ({ children, ...props }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <a style={{ color: getActiveColorOrFallback(['accent5']) }} {...props}>
      {children}
    </a>
  );
};

export default Link;
