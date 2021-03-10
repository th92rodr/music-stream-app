import { sign } from 'jsonwebtoken';

import TokenProvider from './interface';
import Config from '@config/index';

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
