import { useContext } from 'react';
import ThemeContext, { PageThemeProvider } from '../ThemeContext';
import styles from './Admin.module.css';

const AdminInternal = ({ children }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <main
      className={styles.admin}
      style={{
        '--selection-foreground-color': getActiveColorOrFallback(['shade0']),
        '--selection-background-color': getActiveColorOrFallback(['accent5']),
        '--focus-outline-color': getActiveColorOrFallback(['accent6']),
      }}
    >
      {children}
    </main>
  );
};

const Admin = ({ children }) => {
  return (
    <PageThemeProvider>
      <AdminInternal>{children}</AdminInternal>
    </PageThemeProvider>
  );
};

export default Admin;
