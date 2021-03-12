import crypto from 'crypto';

import ISaltProvider from './interface';

export default class CryptoSaltProvider implements ISaltProvider {
  public async generate(rounds: number): Promise<string> {
    return crypto
      .randomBytes(Math.ceil(rounds / 2))
      .toString('hex')
      .slice(0, rounds);
  }
}
