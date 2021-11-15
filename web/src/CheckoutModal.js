import { useContext, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import styles from './CheckoutModal.module.css';
import ThemeContext from './ThemeContext';
import Banner from './Banner';
import Button from './Button';
import Modal from './Modal';
import Price from './Price';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutModal = ({ price, onClose, onComplete }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    (async function fetchIntent() {
      const response = await window.fetch('/.netlify/functions/intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(price),
      });
      const data = await response.json();
      if (response.status === 200) {
        setClientSecret(data.clientSecret);
      } else {
        setError(data.message);
      }
    })();
  }, [price]);

  const cardStyle = {
    style: {
      base: {
        'color': getActiveColorOrFallback(['shade7']),
        'fontFamily': '"Fira Code", monospace',
        'fontSmoothing': 'antialiased',
        'fontSize': '16px',
        '::placeholder': {
          color: getActiveColorOrFallback(['shade5']),
        },
      },
      invalid: {
        color: getActiveColorOrFallback(['accent0']),
        iconColor: getActiveColorOrFallback(['accent0']),
      },
      complete: {
        color: getActiveColorOrFallback(['accent3']),
        iconColor: getActiveColorOrFallback(['accent3']),
      },
    },
  };

  const cardChange = async (evt) => {
    setDisabled(evt.empty);
    setError(evt.error ? evt.error.message : '');
  };

  const submit = async (evt) => {
    evt.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: evt.target.name.value,
        },
      },
    });
    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
      window.__ssa__log('payment failed', { message: payload.error.message });
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      onComplete();
      window.__ssa__log('payment complete');
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <Modal
        onClose={onClose}
        footer={
          <>
            <Button
              type='button'
              className={styles.cancel}
              secondary
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button disabled={disabled || processing || succeeded}>
              {processing ? 'Processing...' : 'Pay & download'}
            </Button>
          </>
        }
      >
        <div
          className={styles.price}
          style={{ color: getActiveColorOrFallback(['shade7']) }}
        >
          Total: <Price amount={price.amount} />
        </div>
        <div
          className={styles.card}
          style={{ borderColor: getActiveColorOrFallback(['shade7']) }}
        >
          <CardElement options={cardStyle} onChange={cardChange} />
        </div>
        {error ? (
          <Banner
            className={styles.error}
            color={getActiveColorOrFallback(['accent0'])}
          >
            {error}
          </Banner>
        ) : null}
      </Modal>
    </form>
  );
};

const WrappedCheckoutModal = (props) => (
  <Elements stripe={stripePromise}>
    <CheckoutModal {...props} />
  </Elements>
);

export default WrappedCheckoutModal;
