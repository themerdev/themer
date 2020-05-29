import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Color from 'color';
import styles from './CheckoutModal.module.css';
import ThemeContext from './ThemeContext';
import Banner from './Banner';
import Button from './Button';
import useEscListener from './useEscListener';
import { currencyOptions } from './PriceInput';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Form = ({ price, onClose, onComplete }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const { getActiveColorOrFallback } = useContext(ThemeContext);

  useEffect(() => {
    (async function fetchIntent() {
      const response = await window
        .fetch('/.netlify/functions/intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(price)
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
        color: getActiveColorOrFallback(['shade7']),
        fontFamily: '"Fira Code", monospace',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: getActiveColorOrFallback(['shade5'])
        }
      },
      invalid: {
        color: getActiveColorOrFallback(['accent0']),
        iconColor: getActiveColorOrFallback(['accent0']),
      },
      complete: {
        color: getActiveColorOrFallback(['accent3']),
        iconColor: getActiveColorOrFallback(['accent3']),
      },
    }
  };

  const cardChange = async evt => {
    setDisabled(evt.empty);
    setError(evt.error ? evt.error.message : "");
  };

  const submit = async evt => {
    evt.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: evt.target.name.value
        }
      }
    });
    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      onComplete();
    }
  };
  
  return succeeded ? (
      <div className={ styles.successWrapper }>
        <Banner color={ getActiveColorOrFallback(['accent3']) }>
          Thank you for your support!
        </Banner>
        <Button
          className={ styles.close }
          secondary
          onClick={ onClose }
        >Close</Button>
      </div>
    ) : (
      <form className={ styles.form } onSubmit={submit}>
        <div
          className={ styles.card }
          style={{ borderColor: getActiveColorOrFallback(['shade7']) }}
        >
          <CardElement options={ cardStyle } onChange={ cardChange } />
        </div>
        <Button
          type="button"
          className={ styles.cancel }
          secondary
          onClick={ onClose }
        >Cancel</Button>
        <Button
          className={ styles.submit }
          disabled={ disabled || processing || succeeded }
        >
          {processing ? 'Processing...' : 'Pay & download' }
        </Button>
        {error ? (
          <Banner
            className={ styles.error }
            color={ getActiveColorOrFallback(['accent0']) }
          >
            {error}
          </Banner>
        ) : null}
      </form>
    );
}

export default ({ price, onClose, onComplete }) => {
  useEscListener(onClose);
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  const currency = currencyOptions.find(({isoCode}) => isoCode === price.code);
  return (
    <div
      className={ styles.scrim }
      style={{
        backgroundColor: Color(getActiveColorOrFallback(['shade0'], true)).fade(0.25).hsl(),
      }}
    >
      <div
        className={ styles.content }
        style={{
          backgroundColor: getActiveColorOrFallback(['shade0'], true),
          borderColor: getActiveColorOrFallback(['shade7']),
          boxShadow: `0 0 var(--size-large-1) var(--size-large-1) ${getActiveColorOrFallback(['shade0'], true)}`,
        }}
      >
        <div
          className={ styles.price }
          style={{ color: getActiveColorOrFallback(['shade7']) }}
        >
          Total:{' '}
          <span className={ styles.symbol }>{currency.symbol}</span>
          {currency.toDisplay(price.amount)}
        </div>
        <Elements stripe={ stripePromise }>
          <Form price={ price } onClose={ onClose } onComplete={ onComplete } />
        </Elements>
      </div>
    </div>
  );
}
