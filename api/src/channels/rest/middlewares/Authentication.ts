import { verify } from 'jsonwebtoken';

import Config from '../../../config';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default class Authentication {
  authentication(authenticationHeader: string): string {
    const [, token] = authenticationHeader.split(' ');

    try {
      const decodedToken = verify(token, Config.jwt.secret);

      const { sub } = decodedToken as TokenPayload;

      return sub;
    } catch {
      throw new Error();
    }
  }
}
