import { sign } from 'jsonwebtoken';

import Config from '@config/index';
import TokenProvider from './interface';

export default class JwtTokenProvider implements TokenProvider {
  public generate(id: string): string {
    const { secret, expiresIn } = Config.authentication;

    const signOptions = {
      subject: id,
      expiresIn,
    };

    const token = sign({}, secret, signOptions);

    return token;
  }
}
