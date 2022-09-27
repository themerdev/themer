/*
 * Deprecated, but kept around for cached clients.
 */

import { userTable } from './helpers/airtable';

export async function handler(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 501 };
  const { email, paid } = JSON.parse(event.body);
  await userTable.create({
    'Email Address': email,
    'Type': paid ? 'Paid' : 'Free',
  });
  return { statusCode: 201 };
}
