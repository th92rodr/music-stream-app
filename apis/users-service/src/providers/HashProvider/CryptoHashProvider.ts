import crypto from 'crypto';

import HashProvider from './interface';
import Config from '@config/index';

export default class CryptoHashProvider implements HashProvider {
  private salt: string;
  private algorithm: string;

  constructor() {
    this.salt = Config.security.salt;
    this.algorithm = Config.security.algorithm;
  }

  public async generate(payload: string): Promise<string> {
    const hmac = crypto.createHmac(this.algorithm, this.salt);
    hmac.update(payload);
    return hmac.digest('hex');
  }

  public async compare(payload: string, hashed: string): Promise<boolean> {
    const hashedPayload = await this.generate(payload);
    return hashed === hashedPayload;
  }
}
