import { hash, compare } from 'bcryptjs';

import Config from '@config/index';
import HashProvider from './interface';

export default class BCryptHashProvider implements HashProvider {
  private salt: string;

  constructor() {
    this.salt = Config.security.salt;
  }

  public async generate(payload: string): Promise<string> {
    return hash(payload, this.salt);
  }

  public async compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
