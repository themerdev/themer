import stripe from './helpers/stripe';

const PRO_THEME_ACCOUNTS = {
  'victor-mono': process.env.STRIPE_ACCOUNT_VICTOR_MONO,
};

export async function handler(event) {
  try {
    const { code: currency, amount, proSlug } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create(
      PRO_THEME_ACCOUNTS[proSlug]
        ? {
            amount,
            currency,
            application_fee_amount: Math.floor(amount * 0.2),
            transfer_data: {
              destination: PRO_THEME_ACCOUNTS[proSlug],
            },
          }
        : {
            amount,
            currency,
          },
    );
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: err.raw.message,
      }),
    };
  }
}
