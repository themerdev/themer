import withAuth from './helpers/auth';
import { authorTable, retrieveAuthor } from './helpers/airtable';

async function getAuthor(event) {
  return await withAuth(event, async function (id) {
    const author = await retrieveAuthor(id);
    if (author) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(author.fields),
      };
    } else {
      return { statusCode: 404 };
    }
  });
}

async function postAuthor(event) {
  return await withAuth(event, async function (id) {
    const { name, email, url } = JSON.parse(event.body);
    await authorTable.create({
      'GitHub User ID': id.toString(),
      'Name': name,
      'Email': email,
      'URL': url,
    });
    return { statusCode: 201 };
  });
}

export async function handler(event) {
  switch (event.httpMethod) {
    case 'GET':
      return await getAuthor(event);
    case 'POST':
      return await postAuthor(event);
    default:
      return { statusCode: 501 };
  }
}
