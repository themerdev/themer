const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
}
