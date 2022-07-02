import { useContext } from 'react';
import styles from './Dashboard.module.css';
import Link from '../Link';
import Button from '../Button';
import useAuth from '../useAuth';
import useAuthor from './useAuthor';
import useStripeAccount from './useStripeAccount';
import AuthorForm from './AuthorForm';
import useHistory from '../useHistory';
import Loading from './Loading';
import ThemeContext from '../ThemeContext';
import classNames from 'classnames';
import OnboardingStep from './OnboardingStep';

const Dashboard = () => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const { authFetch } = useAuth();
  const { author, loadingAuthor } = useAuthor();
  const { push } = useHistory();
  const approved = author && author.Approved;
  const { stripeAccount, loadingStripeAccount } = useStripeAccount();
  const stripeOnboardingStarted = !!stripeAccount;
  const stripeOnboardingCompleted =
    stripeAccount && stripeAccount.details_submitted;
  return (
    <main className={styles.container}>
      <header
        className={styles.header}
        style={{ borderBottomColor: getActiveColorOrFallback(['shade4']) }}
      >
        <h1>
          <Link href='/'>themer</Link>
        </h1>
        <div className={styles.user}>
          {author && author.Name ? <span>Hi, {author.Name}</span> : null}
          <Link href='/logout'>Log out</Link>
        </div>
      </header>
      <Loading isLoading={loadingAuthor || loadingStripeAccount}>
        {(loadingClassName, loadingStyle) => (
          <div
            className={classNames(styles.steps, loadingClassName)}
            style={loadingStyle}
          >
            <OnboardingStep title='Log in' completed />
            <OnboardingStep
              title='Join the waitlist'
              completed={!!author}
              detail={
                !!author ? (
                  <span
                    style={{
                      color: getActiveColorOrFallback([
                        approved ? 'accent3' : 'accent2',
                      ]),
                    }}
                  >
                    Status: {approved ? 'approved' : 'pending'}
                  </span>
                ) : null
              }
            >
              {!loadingAuthor && !author ? (
                <AuthorForm className={styles.authorForm} />
              ) : null}
            </OnboardingStep>

            <OnboardingStep
              title='Set up payment account'
              disabled={!approved}
              completed={stripeOnboardingCompleted}
              detail={
                approved && !loadingStripeAccount ? (
                  stripeOnboardingCompleted ? (
                    <Link href='/stripe-account-dashboard'>
                      Go to dashboard
                    </Link>
                  ) : stripeOnboardingStarted ? (
                    <Link href='/stripe-account-onboarding'>
                      Continue setup
                    </Link>
                  ) : (
                    <Button
                      onClick={async () => {
                        await authFetch('/api/stripe-account', {
                          method: 'POST',
                        });
                        push('/stripe-account-onboarding');
                      }}
                    >
                      Create
                    </Button>
                  )
                ) : null
              }
            />

            <OnboardingStep title='Configure theme' disabled={!approved} />
          </div>
        )}
      </Loading>
    </main>
  );
};

export default Dashboard;
