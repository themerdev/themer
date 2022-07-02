import withAuth from './helpers/auth';
import stripe from './helpers/stripe';
import { retrieveAuthor } from './helpers/airtable';

export async function handler(event) {
  return await withAuth(event, async function stripeAccountLink(id) {
    const author = await retrieveAuthor(id);

    if (!author.get('Stripe Account ID')) {
      return { statusCode: 404 };
    }

    const type = event.queryStringParameters.type;

    if (type === 'onboarding') {
      const accountLink = await stripe.accountLinks.create({
        account: author.get('Stripe Account ID'),
        refresh_url: process.env.STRIPE_ONBOARDING_REFRESH_URL,
        return_url: process.env.STRIPE_ONBOARDING_RETURN_URL,
        type: 'account_onboarding',
      });

      return {
        statusCode: 201,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: accountLink.url }),
      };
    }

    if (type === 'dashboard') {
      const loginLink = await stripe.accounts.createLoginLink(
        author.get('Stripe Account ID'),
      );

      return {
        statusCode: 201,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: loginLink.url }),
      };
    }

    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: `Unknown link type: ${type}` }),
    };
  });
}
