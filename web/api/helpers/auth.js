import { verify } from 'jsonwebtoken';

export default async function withAuth(event, next) {
  const authHeader = event.headers.authorization;
  if (authHeader) {
    if (authHeader.startsWith('Bearer')) {
      const [_, token] = authHeader.split(' ');
      const { id } = verify(token, process.env.SECRET);
      if (id) {
        return await next(id, event);
      }
    }
  }
  return {
    statusCode: 401,
  };
}
