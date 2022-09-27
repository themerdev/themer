import { subscriberTable } from './helpers/airtable';

export async function handler(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 501 };
  const { email, source } = JSON.parse(event.body);
  try {
    await subscriberTable.create({
      'Email Address': email,
      'Source': source,
    });
    return { statusCode: 201 };
  } catch (e) {
    return { statusCode: e.statusCode || 500 };
  }
}
