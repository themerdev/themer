import withAuth from './helpers/auth';
import stripe from './helpers/stripe';
import { authorTable, retrieveAuthor } from './helpers/airtable';

async function createStripeAccount(event) {
  return await withAuth(event, async function (id) {
    const author = await retrieveAuthor(id);

    if (author && author.get('Stripe Account ID')) {
      return { statusCode: 400 };
    }

    const account = await stripe.accounts.create({ type: 'express' });

    await authorTable.update(author.id, { 'Stripe Account ID': account.id });

    return { statusCode: 201 };
  });
}

async function getStripeAccount(event) {
  return await withAuth(event, async function (id) {
    const author = await retrieveAuthor(id);

    if (!author || !author.get('Stripe Account ID')) {
      return { statusCode: 404 };
    }

    const account = await stripe.accounts.retrieve(
      author.get('Stripe Account ID'),
    );

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(account),
    };
  });
}

export async function handler(event) {
  switch (event.httpMethod) {
    case 'GET':
      return await getStripeAccount(event);
    case 'POST':
      return await createStripeAccount(event);
    default:
      return { statusCode: 501 };
  }
}
