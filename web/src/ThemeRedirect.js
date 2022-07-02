import { useContext, useEffect } from 'react';
import { flatMap } from 'lodash';
import ThemeContext, { UrlThemeProvider } from './ThemeContext';

const Redirect = ({ slug }) => {
  const { proThemes, replaceState } = useContext(ThemeContext);
  useEffect(() => {
    window.__ssa__log('redirect pro theme slug', { slug });
    const { state } = flatMap(proThemes, ({ themes }) => themes).find(
      (theme) => theme.slug === slug,
    );
    replaceState(state);
  });
  return null;
};

const ThemeRedirect = (props) => (
  <UrlThemeProvider>
    <Redirect {...props} />
  </UrlThemeProvider>
);

export default ThemeRedirect;
