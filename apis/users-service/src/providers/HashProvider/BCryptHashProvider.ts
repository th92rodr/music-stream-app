import { hash, compare } from 'bcryptjs';

import IHashProvider from './interface';
import Config from '@config/index';

export default class BCryptHashProvider implements IHashProvider {
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
