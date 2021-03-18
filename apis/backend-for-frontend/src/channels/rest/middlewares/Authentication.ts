import { verify } from 'jsonwebtoken';

import Config from '@config/index';
import { ErrorInvalidToken } from '@constants/errors';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default class Authentication {
  public authentication(authenticationHeader: string): string {
    const [, token] = authenticationHeader.split(' ');

    try {
      const decodedToken = verify(token, Config.authentication.secret);

      const { sub } = decodedToken as TokenPayload;

      return sub;
    } catch {
      throw new ErrorInvalidToken();
    }
  }
}
