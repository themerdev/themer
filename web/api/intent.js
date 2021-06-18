const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event) {
  try {
    const { code: currency, amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return {
      statusCode: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode,
      contentType: 'application/json',
      body: JSON.stringify({
        message: err.raw.message,
      }),
    };
  }
};
