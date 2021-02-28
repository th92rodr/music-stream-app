import crypto from 'crypto';

import SaltProvider from './interface';

export default class CryptoSaltProvider implements SaltProvider {
  public async generate(rounds: number): Promise<string> {
    return crypto
      .randomBytes(Math.ceil(rounds / 2))
      .toString('hex')
      .slice(0, rounds);
  }
}
