import { parse } from 'cookie';
import fetch from 'node-fetch';
import { sign } from 'jsonwebtoken';

export async function handler(event) {
  const cookies = parse(event.headers.cookie);
  if (
    !cookies.csrf_token ||
    cookies.csrf_token !== event.queryStringParameters.state
  ) {
    console.log(
      `CSRF token mismatch. Cookie: ${cookies.csrf_token} vs. param: ${event.queryStringParameters.state}`,
    );
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'CSRF token mismatch' }),
    };
  }

  if (!event.queryStringParameters.code) {
    console.log('Missing temporary OAuth code.');
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'missing temporary OAuth code' }),
    };
  }
  const { access_token: accessToken } = await fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: event.queryStringParameters.code,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  ).then((res) => res.json());

  const user = await fetch('https://api.github.com/user', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());

  if (!user.id) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'missing GitHub user ID' }),
    };
  }

  const token = sign({ id: user.id }, process.env.SECRET);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  };
}
