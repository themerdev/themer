import { useContext, useState } from 'react';
import qs from 'qs';
import Banner from './Banner';
import Link from './Link';
import ThemeContext, { PageThemeProvider } from './ThemeContext';
import TextInput from './TextInput';
import Button from './Button';
import styles from './Newsletter.module.css';
import useHistory from './useHistory';

const NewsletterInternal = () => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const { replace, search } = useHistory();
  const params = qs.parse(search, { ignoreQueryPrefix: true });
  const email = params.email || '';
  const setEmail = (email) =>
    replace(qs.stringify(email ? { email } : {}, { addQueryPrefix: true }));

  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const subscribe = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    try {
      await window.fetch('/api/subscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Sign Up' }),
      });
      window.__ssa__log('subscribe to newsletter');
      setLoading(false);
      setComplete(true);
    } catch {
      window.__ssa__log('fail to subscribe to newsletter');
      setLoading(false);
    }
  };
  return (
    <main
      className={styles.main}
      style={{
        '--selection-foreground-color': getActiveColorOrFallback(['shade0']),
        '--selection-background-color': getActiveColorOrFallback(['accent5']),
        '--focus-outline-color': getActiveColorOrFallback(['accent6']),
      }}
    >
      {complete ? (
        <Banner color={getActiveColorOrFallback(['accent3'])}>
          <span>Success!</span>
          <Link href='/'>Back to themer</Link>
        </Banner>
      ) : (
        <form className={styles.form} onSubmit={subscribe}>
          <p style={{ color: getActiveColorOrFallback(['shade7']) }}>
            Join the themer community:
          </p>
          <TextInput
            className={styles.email}
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            required
          />
          <Button special disabled={!email || loading}>
            {loading ? 'Loading...' : 'Subscribe'}
          </Button>
          <p
            className={styles.disclaimer}
            style={{ color: getActiveColorOrFallback(['shade4']) }}
          >
            No spam. Just occasional theme updates, discounts, freebies, and
            other perks. Unsubscribe at any time.
          </p>
        </form>
      )}
    </main>
  );
};

const Newsletter = () => {
  return (
    <PageThemeProvider>
      <NewsletterInternal />
    </PageThemeProvider>
  );
};

export default Newsletter;
