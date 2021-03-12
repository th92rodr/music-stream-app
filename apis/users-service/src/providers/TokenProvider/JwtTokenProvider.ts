import { sign } from 'jsonwebtoken';

import ITokenProvider from './interface';
import Config from '@config/index';

export default class JwtTokenProvider implements ITokenProvider {
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
